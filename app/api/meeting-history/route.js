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
  if (body.addToHistory) {
    meetingHistory.allMeetings.reverse().push(body.student);
    meetingHistory.lastMeetings = meetingHistory.lastMeetings.filter(
      (student) => student._id != body.student._id,
    );
    await sessionUser.save();
    return new Response("Meeting added to history", { status: 200 });
  } else if (body.id) {
    const studentIndex = meetingHistory.allMeetings
      .findIndex((student) => student._id == body.id);
    meetingHistory.allMeetings[studentIndex].isPaid = body.isPaid;
    await sessionUser.save();
    return new Response("Student has paid", { status: 200 });
  } else {
    meetingHistory.lastMeetings = meetingHistory.lastMeetings.filter(
      (student) => student._id != body.student._id,
    );
    await sessionUser.save();
    return new Response("Meeting added to history", { status: 200 });
  }
}
