

import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "../components/globals/Provider";
import {getServerSession} from "next-auth";
import {authOptions} from "./api/auth/[...nextauth]/route";

import React from "react";
import Header from "../components/globals/header/Header";




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
            <div className={"bg-gray-100 w-full  flex flex-col justify-between lg:h-screen lg:overflow-hidden overflow-hidden "}>
                <Header
                    session = {session}
                />
                <div className={" padding-x bg-gray-100 mt-24 lg:mt-0 "}>
                    <main>
                        {children}
                    </main>
                </div>
                <footer className={"bg-slate-200  flex-center padding-y padding-x text-center" }>
                    <p className={"text-slate-500 text-sm"}>Właścicelem strony jest Uczymypl. Wszelkie zapytania prosimy kierować na adres uczymypl@kontakt.pl</p>
                </footer>
            </div>
        </Provider>
        </body>
        </html>
    );
}