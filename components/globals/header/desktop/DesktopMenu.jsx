import React from 'react'
import SignInOutBtn from "../SignInOutBtn";

const DesktopMenu = () => {
    return (
        <div
            className={"absolute  flex-col items-start gap-3 hidden lg:flex"}
        >
            <button>Ustawienia</button>
            <SignInOutBtn variation={"signOut"} />
        </div>
    )
}
export default DesktopMenu
