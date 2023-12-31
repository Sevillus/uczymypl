import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../../models/user";
import { connectToDB } from "../../../../utils/database";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    async session({session, token, user}){
      try {
        const { isConnected } = await connectToDB();
        session.isConnectedToDB = isConnected
        return session;
      } catch (error) {
        console.error("Błąd sprawdzania połączenia z bazą danych:", error);
        return session;
      }
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        await connectToDB();
        const userExists = await User.findOne({ email: profile.email });

        if (!userExists) {
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
            role: "teacher",
            target:0,
            lessonPrice:0,
            meetingHistory: [[]],
            schedule: [[]],
          });
        }


        return true;
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
