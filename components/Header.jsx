"use client"
import React, {useState} from 'react'
import Logo from "./Logo";
import Navbar from "./Navbar";
import Profile from "./Profile";
import MenuIcon from '@mui/icons-material/Menu';

const Header = ({session}) => {

    const menuOverlay = document.querySelector(".menu-overlay")
    const menuContent = document.querySelector(".menu-content")
    const name = session?.user.name
    const img = session?.user.image
    return (
        <header className={"w-full  flex-between bg-slate-700  text-white "}z>
            <Logo />
            <div className={"hidden lg:flex justify-between items-center gap-10 "}>
                <Navbar />
                <Profile name={name} img={img}/>
            </div>
            <div className={"lg:hidden z-50"} >
                <MenuIcon onClick={() => menuOverlay.classList.toggle(".show-menu")}/>
            </div>

                <div className={"menu-overlay"}>
                    <div className={"menu-content"}>
                        Menu
                    </div>
                </div>

        </header>
    )
}
export default Header
