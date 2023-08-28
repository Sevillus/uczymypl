import React from 'react'
import Logo from "@/components/Logo";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";

const Header = (props) => {
    const {name} = props
    return (
        <header className={"w-full flex-between mb-10"}>
            <Logo />

            <div className={"flex-between gap-10"}>
                <Navbar />
                <Profile name={name} />
            </div>
        </header>
    )
}
export default Header
