import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import User from "../../../../models/user";
import {connectToDB} from "../../../../utils/database";
import {redirect} from "next/navigation";



export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,

        })
    ],
    pages: {
        signIn: '/signin'
    },
    callbacks: {
        async session ({ session }) {
            const sessionUser = await User.findOne({email: session.user.email});
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ account, profile, user, credentials }) {
            try {
                await connectToDB();
                // check if user already exists
                const userExists = await User.findOne({ email: profile.email });

                //check what role has user
                const userRole = await User.findOne({ email: profile.email })
                    .then(user => {
                        return user ? user.role : "teacher"; // Default role if user doesn't exist
                    });

                // Store the userRole in the session
                user.role = userRole;

                // if not, create a new document and save user in MongoDB
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture,
                        role: userRole // Use the obtained userRole
                    });
                }

                return true;
            } catch (error) {
                console.log("Error checking if user exists: ", error.message);
                return false;
            }
        },
        async redirect({ url, baseUrl, user }) {
            const userRole = user ? user.role : "teacher";

            return `http://localhost:3000/user/${userRole}`;
        }

    }
}


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
