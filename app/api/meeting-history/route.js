import User from "../../../models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import dayjs from "dayjs";

export async function POST(req) {
  const session = await getServerSession(authOptions);
  const body = await req.json();
  const sessionUser = await User.findOne({ email: session?.user.email });

  if (!sessionUser) {
    return new Response("User not found", { status: 404 });
  }

  const meetingHistory = sessionUser.meetingHistory[dayjs().month()];
  //Deleting student from last sessions history (used in meetingPopUp)
  meetingHistory.lastMeetings = meetingHistory.lastMeetings.filter(
      (student) => student._id != body.student._id )

  if (body.addToHistory) {
    meetingHistory.allMeetings.reverse().push(body.student);
    await sessionUser.save();
    return new Response("Meeting added to history", { status: 200 });
  }
  //changing student's payment information, only if body contains student id
   if (body.id) {
        meetingHistory.allMeetings.forEach(student => {
            if(student._id == body.id && dayjs(student.nextMeeting).format("DD.MM.YYYY") == dayjs(body.nextMeeting).format("DD.MM.YYYY")){
               student.isPaid = body.isPaid
            }
        })
    await sessionUser.save();
    return new Response("Student has paid", { status: 200 });
  }
}
