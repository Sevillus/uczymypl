import React from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import SignInOutBtn from "../SignInOutBtn";
const MobileMenuIcon = ({name, toggleMenu}) => {

    return (
        <div>
            {name ? (
                <MenuIcon className={"lg:hidden "} onClick={toggleMenu} />
            ) : (
                <SignInOutBtn variation={"signIn"} />
            )}
        </div>
    )
}
export default MobileMenuIcon
