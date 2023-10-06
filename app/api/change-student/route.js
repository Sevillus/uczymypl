import User from "../../../models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import meetingInfo from "../../../utils/meetingDay";
import { sortByDate } from "../../../utils/sortByDate";
import {formatTime} from "../../../utils/formatDurationTime";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const body = await req.json();



  if (session?.user) {
    const sessionUser = await User.findOne({ email: session?.user.email });

    if (!sessionUser) {
      return new Response("User not found", { status: 404 });
    }

    if (body && !body.delete ) {

      const student = sessionUser.students.find(
        (student) => student._id == body.id,
      );
      student.name = body.name;
      student.price = body.price;
      student.day = body.day;
      student.time = body.time;
      student.nextMeeting = meetingInfo(body.day, body.time);
      student.duration= formatTime(body),
      student.cyclical = body.cyclical,
      sortByDate(sessionUser.students);

      await sessionUser.save();

      return new Response("Student added to user", { status: 200 });
    }//deleting student
    else if (body && body.delete) {
      const studentIndex = sessionUser.students.findIndex(
        (student) => student._id == body.id,
      );
      if (studentIndex !== -1) {
        sessionUser.students.splice(studentIndex, 1);
        await sessionUser.save();
        return new Response("Student deleted", { status: 200 });
      } else {
        return new Response("Student not found", { status: 404 });
      }
    }
    else {
      return new Response("Invalid or missing student data in request body", {
        status: 400,
      });
    }
  } else {
    return new Response("Login Failure", { status: 401 });
  }
}
