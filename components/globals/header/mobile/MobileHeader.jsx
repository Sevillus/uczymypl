import React from 'react'
import Logo from "../Logo";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileNavbar from "./MobileNavbar";
import MobileMenu from "./MobileMenu";

const MobileHeader = ({ toggleMenu, name, img, target }) => {
    return (
        <div className={"lg:hidden"}>
            <div className={"flex-between mt-2 "}>
                <Logo />
                <MobileMenuIcon name={name} toggleMenu={toggleMenu} />
            </div>
            <MobileNavbar />
            <MobileMenu
                toggleMenu={toggleMenu}
                name={name}
                img={img}
                target={target}
            />
        </div>
    )
}
export default MobileHeader
