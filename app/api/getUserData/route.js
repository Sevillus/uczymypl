import User from "../../../models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import dayjs from "dayjs";
import meetingInfo from "../../../utils/meetingDay";
import { sortByDate } from "../../../utils/sortByDate";
import { daysOfWeekNames} from "../../../constants/months";

export async function GET(req, res) {

  const session = await getServerSession(authOptions);

  try {
    if (req.method === "GET" ) {
      const sessionUser = await User.findOne({ email: session?.user.email });

      const currentMonthIndex = dayjs().month();
      // creating meetingHistory arrays
      if (!sessionUser.meetingHistory[currentMonthIndex]) {
        sessionUser.meetingHistory[currentMonthIndex] = {
          month: dayjs().format("MMM"),
          lastMeetings: [],
          allMeetings: [],
        };
      }

      sessionUser.students.map((student, index) => {
        // Adding student into last history if lesson date is smaller than today
        if (dayjs(sessionUser.students[index].nextMeeting) <= dayjs()) {
          sessionUser.meetingHistory[currentMonthIndex].lastMeetings.push(student);
          // delete student if lesson is not cyclical
          !student.cyclical ? sessionUser.students.splice(index, 1) : ""
        }
        // counting next meeting date
        student.nextMeeting = meetingInfo(student.day, student.time);
        const studentDay = student.day.toLowerCase()

        // creating empty schedule
        sessionUser.schedule = daysOfWeekNames.map(dayName => ({
          dayName: dayName,
          studentsThisDay: []
        }));
        // sorting students by lesson day of the week
        sessionUser.schedule.map(day => {
          if (day.dayName.toLowerCase() === studentDay ) {
            const existingStudent = day.studentsThisDay.find(existingStudent => existingStudent.id == student.id);

            if (!existingStudent) {
              day.studentsThisDay.push(student);
            }
          }
        });
      });

      sortByDate(sessionUser.students);

      await sessionUser.save();

      if (!sessionUser) {
        return new Response("Nie znaleziono użytkownika", { status: 404 });
      }
      return new Response(JSON.stringify(sessionUser), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error("Błąd pobierania danych użytkownika: ", error);
    return new Response("Błąd serwera", { status: 500 });
  }
}
