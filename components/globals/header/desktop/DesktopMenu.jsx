import React from 'react'
import SignInOutBtn from "../SignInOutBtn";
import Link from "next/link";

const DesktopMenu = ({setShowMenu}) => {
    return (
        <div
            className={"absolute  flex-col items-start gap-3 hidden lg:flex bg-slate-700 text-white px-8 rounded-lg padding-y"}
        >
            <Link href={"/teacher/settings"} >Ustawienia</Link>
            <SignInOutBtn variation={"signOut"} />
        </div>
    )
}
export default DesktopMenu
