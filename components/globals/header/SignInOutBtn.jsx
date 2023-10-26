import React from 'react'
import {signIn, signOut} from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";

const SignInOutBtn = ({variation}) => {
    return (
        <div>{
            variation === "signIn" ? (
                <button
                    type="button"
                    onClick={() => {
                        signIn("google", { callbackUrl: `/teacher` });
                    }}
                    className="outline_btn text-white text-sm flex items-center gap-4 pointer p-1 lg:p-2 border-slate-400 w-fit rounded-lg border"
                >
                    Zaloguj się
                </button>
            ) : (
                <button
                    type="button"
                    onClick={() => {
                        signOut({ callbackUrl: "/" });
                    }}
                    className="outline_btn text-black flex items-center gap-4 pointer p-2 border-slate-400 w-fit rounded-lg border"
                >
                    <p>Wyloguj</p>
                    <LogoutIcon className={"text-sm"} />
                </button>
            )
        }
        </div>
    )
}
export default SignInOutBtn
