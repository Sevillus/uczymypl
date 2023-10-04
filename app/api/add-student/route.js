import User from "../../../models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import meetingInfo from "../../../utils/meetingDay";
import { sortByDate } from "../../../utils/sortByDate";
import dayjs from "dayjs";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const body = await req.json();
  if (session?.user) {
    const sessionUser = await User.findOne({ email: session?.user.email });

    if (!sessionUser) {
      return new Response("User not found", { status: 404 });
    }

    const formatTime = (student) => {
      const [studentHour, studentMinute] = student.time.split(':').map(Number);
      const durationMinutes = student.duration; // Czas trwania w minutach

      // Oblicz godzinę i minutę wynikową
      let newHour = studentHour;
      let newMinute = studentMinute + durationMinutes;

      // Sprawdź, czy trzeba uwzględnić dodatkową godzinę
      if (newMinute >= 60) {
        newHour += Math.floor(newMinute / 60);
        newMinute %= 60;
      }

      // Sformatuj wynik
      const formattedTime = dayjs().hour(newHour).minute(newMinute).format('HH:mm');

      return formattedTime;
    };



    const newStudent = {
      name: body.name,
      price: body.price,
      day: body.day,
      time: body.time,
      duration: formatTime(body),
      cyclical: body.cyclical,
      nextMeeting: meetingInfo(body.day, body.time),
      isPaid: false,
    };

    if (body) {
      sessionUser.students.push(newStudent);
      sortByDate(sessionUser.students);

      await sessionUser.save();


      return new Response("Student added to user", { status: 200 });
    } else {
      return new Response("Invalid or missing student data in request body", {
        status: 400,
      });
    }
  } else {
    return new Response("Login Failure", { status: 401 });
  }
}
