import React from 'react'
import Logo from "./Logo";
import Navbar from "./Navbar";
import Profile from "./Profile";


const Header = (props) => {
    const {name, img} = props
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
