import React from 'react'
import Logo from "./Logo";
import Navbar from "./Navbar";
import Profile from "./Profile";


const Header = ({session}) => {
    const name = session?.user.name
    const img = session?.user.image
    return (
        <header className={"w-full flex-between mb-10"}>
            <Logo />

            <div className={"flex-between gap-10"}>
                <Navbar />
                <Profile name={name} img={img}/>
            </div>
        </header>
    )
}
export default Header
