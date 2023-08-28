

import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "../components/Provider";
import Profile from "../components/Profile";
import {getServerSession} from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]/route";
import Header from "../components/Header";




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UczymyPL",
  description: "Ucz i bądź nauczany",
};

export default async function RootLayout({ children})
 {

     const session = await getServerSession(authOptions)


  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
            <Profile name = {session?.user.name} />
            {children}
        </Provider>
      </body>
    </html>
  );
}
