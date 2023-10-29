import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "../components/globals/Provider";
import {getServerSession} from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]/route";
import React from "react";
import Header from "../components/globals/header/Header";
import Footer from "../components/globals/footer/Footer";

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
            <div className={"bg-gray-100 w-full  flex flex-col justify-between lg:h-screen  "}>
                <Header session = {session}/>
                <div className={" bg-gray-100 mt-24 lg:mt-0 "}>
                    <main>
                        {children}
                    </main>
                </div>
                <Footer />
            </div>
        </Provider>
        </body>
        </html>
    );
}