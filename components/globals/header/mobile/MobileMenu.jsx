import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import DesktopUserProfile from "../desktop/DesktopUserProfile";
import SignInOutBtn from "../SignInOutBtn";
import UserProfile from "../UserProfile";

const MobileMenu = ({ toggleMenu, name, img}) => {
  return (
    <div className={"burgerMenu flex-center relative lg:hidden"}>
      <div className={"padding-y padding-x w-full h-full flex flex-col gap-10 text-black"}>
        <CloseIcon
          className={"absolute right-2"}
          onClick={toggleMenu}
        />
        <div className={"w-9/12"}>
          <UserProfile name={name} img={img}/>
        </div>
        <div>
            Options...
        </div>
        <SignInOutBtn variation={"signOut"} />
      </div>
    </div>
  );
};
export default MobileMenu;
