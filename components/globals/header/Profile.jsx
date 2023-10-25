"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Image from "next/image";
import AddStudent from "../../pages/teacher/AddStudent";

const Profile = (props) => {
  const { name, img, target } = props;

  const [showMenu, setShowMenu] = useState(false);

  const clickHandler = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  if (name) {
    return (
      <div>
        <div
          className={"flex-between gap-3 cursor-pointer"}
          onClick={clickHandler}
        >
          <Image src={img} width={35} height={35} alt={"profile image"} className={"rounded-full"} />
          <h1 className={" lg:text-base"}>{name}</h1>
        </div>
        {showMenu && (
          <div className={"absolute  flex-col items-start gap-3 hidden lg:flex"}>
            <button>Ustawienia</button>
            <button
              type="button"
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
              className="outline_btn "
            >
              Wyloguj
            </button>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <button
        type="button"
        onClick={() => {
            signIn("google", {  callbackUrl: `/teacher` });
        }}
      >
        Zaloguj się
      </button>
    );
  }
};

export default Profile;
