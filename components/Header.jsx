"use client";
import React, {useEffect, useState} from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Profile from "./Profile";
import MenuIcon from "@mui/icons-material/Menu";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";
import HomeIcon from "@mui/icons-material/Home";

const Header = ({ session }) => {
  const name = session?.user.name;
  const img = session?.user.image;

  return (
    <header className={"sticky top-0 lg:relative z-50 w-full h-fit flex flex-col lg:flex-row lg:justify-between bg-slate-700  text-white  padding-x pt-2 lg:py-4"}>
      <div className={"flex-between"}>
        <Logo />
        <MenuIcon className={"lg:hidden"}/>
      </div>
      <div className={"hidden lg:flex justify-between items-center gap-10 "}>
        <Navbar />
        <Profile name={name} img={img} />
      </div>
      <div
        className={" lg:hidden w-full flex-between padding-x py-2 border-t-2"}
      >
        <HomeIcon className={"text-blue-500"} />
        <EventNoteIcon />
        <GroupIcon />
        <HistoryIcon />
      </div>
    </header>
  );
};
export default Header;
