"use client";
import React, { useState } from "react";
import SignInOutBtn from "../SignInOutBtn";
import UserProfile from "../UserProfile";
import DesktopMenu from "./DesktopMenu";

const DesktopUserProfile = ({ name, img }) => {
  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  return (
    <div>
      {name ? (
        <div>
          <UserProfile name={name} img={img} clickHandler={clickHandler} />
          {showMenu && <DesktopMenu />}
        </div>
      ) : (
        <SignInOutBtn variation={"signIn"} />
      )}
    </div>
  );
};

export default DesktopUserProfile;
