import User from "../../../models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
    const session = await getServerSession(authOptions);
    const body = await req.json();
        const sessionUser = await User.findOne({ email: session?.user.email });
        if (!sessionUser) {
            return new Response("User not found", { status: 404 });
        } else {
            sessionUser.lessonPrice = Number(body.lessonPrice)
            sessionUser.target = Number(body.target);
            await sessionUser.save();
            return new Response("Role added to user", { status: 200 });
        }
    }



