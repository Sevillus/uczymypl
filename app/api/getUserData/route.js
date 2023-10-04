import { getSession } from "next-auth/react";
import User from "../../../models/user";
import { connectToDB } from "../../../utils/database";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import dayjs from "dayjs";
import meetingInfo from "../../../utils/meetingDay";
import { sortByDate } from "../../../utils/sortByDate";
import {daysOfWeek, daysOfWeekNames} from "../../../constants/months";

export async function GET(req, res) {
  await connectToDB();

  const session = await getServerSession(authOptions);

  try {
    if (req.method === "GET") {
      // Pobierz dane użytkownika na podstawie sesji
      const sessionUser = await User.findOne({ email: session?.user.email });

      const currentMonthIndex = dayjs().month();

      if (!sessionUser.meetingHistory[currentMonthIndex]) {
        sessionUser.meetingHistory[currentMonthIndex] = {
          month: dayjs().format("MMM"),
          lastMeetings: [],
          allMeetings: [],
        };
      }


        sessionUser.schedule = daysOfWeekNames.map(dayName => ({
          dayName: dayName,
          studentsThisDay: []
        }));

      sessionUser.students.map((student, index) => {
        //dodawanie ucznia do last history
        if (dayjs(sessionUser.students[index].nextMeeting) <= dayjs()) {
          sessionUser.meetingHistory[currentMonthIndex].lastMeetings.push(student);
          //usuwanie studenta, gdy nie ma zaznaczonych zajęć cyklicznych
          !student.cyclical ? sessionUser.students.splice(index, 1) : ""
        }
        student.nextMeeting = meetingInfo(student.day, student.time);
        const studentDay = student.day.toLowerCase()

        sessionUser.schedule.map(day => {
          if (day.dayName.toLowerCase() === studentDay ) {
            // Sprawdź, czy student o danym ID nie istnieje w studentsThisDay
            const existingStudent = day.studentsThisDay.find(student => student.id === student.id);

            // Jeśli nie istnieje, dodaj go do studentsThisDay
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

      // Zwróć dane użytkownika jako odpowiedź JSON
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
