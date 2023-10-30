"use client"
import React from 'react'
import {signIn} from "next-auth/react";
import LoginIcon from "@mui/icons-material/Login";

const HomePageJoin = () => {
    return (
        <div className={"w-full h-[700px] px-6 lg:px-56 py-20 flex-center flex-col"}>
            <h2 className={"text-2xl w-full lg:text-4xl font-semibold my-10 border-b-2 py-4 flex gap-4 justify-center  text-center"}>
                Dołącz do społeczności Uczymy.pl!
            </h2>
            <p className={"lg:w-6/12 lg:leading-10 text-slate-200 text-lg lg:text-2xl"}>Nie zwlekaj i załóż darmowe konto, przy pomocy konta google.</p>
            <button className={"border p-4 rounded-lg flex gap-4 hover:translate-x-6 easy-in-out duration-300 my-10"}
                    type="button"
                    onClick={() => {
                        signIn("google", { callbackUrl: `/teacher` });
                    }}>
                Bezpłatna Rejestracja
                <LoginIcon />
            </button>
        </div>
    )
}
export default HomePageJoin
