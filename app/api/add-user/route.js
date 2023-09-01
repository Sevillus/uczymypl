import User from "../../../models/user";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
    const session = await getServerSession(authOptions);
    const body = await req.json();


    const sessionUser = await User.findOne({ email: session?.user.email });

    if (!sessionUser) {
        return new Response("User not found", { status: 404 });
    }

    // Dodawanie nowej roli do użytkownika
    if (body.role) {
        sessionUser.role = body.role;
        sessionUser.target = Number(body.target);
        await sessionUser.save();
        console.log("User role updated:", sessionUser);
        return new Response("Role added to user", { status: 200 });
    } else {
        return new Response("Role is missing in request body", { status: 400 });
    }


}
