

import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "../components/Provider";
import Profile from "../components/Profile";
import {getServerSession} from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]/route";
import Header from "../components/Header";
import React from "react";




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
            <div className={"padding-y padding-x"}>
                <Header
                    name={session?.user.name}
                />
                <main>
                    {children}
                </main>
                <footer>

                </footer>
            </div>
        </Provider>
      </body>
    </html>
  );
}
