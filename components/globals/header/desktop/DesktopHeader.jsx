import React from 'react'
import Logo from "../Logo";
import DesktopNavbar from "./DesktopNavbar";
import DesktopUserProfile from "./DesktopUserProfile";

const DesktopHeader = ({name, img}) => {
    return (
        <div className={" hidden lg:flex justify-between w-full"}>
            <Logo className={"text-4xl"}/>
            <div className={"hidden lg:flex justify-between items-center gap-10 "}>
                <DesktopNavbar />
                <DesktopUserProfile name={name} img={img} />
            </div>
        </div>
    )
}
export default DesktopHeader
