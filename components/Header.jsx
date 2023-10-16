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
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import cn from "../utils/cn";

const Header = ({ session }) => {
  const name = session?.user.name;
  const img = session?.user.image;

    const pathname = usePathname()


  return (
    <header className={"lg:relative z-50 w-full  flex flex-col  lg:flex-row lg:justify-between bg-slate-700  text-white  padding-x  lg:py-4"}>
      <div className={"flex-between mt-2 lg:mt-0"}>
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
          <Link href={"/teacher"}><HomeIcon className={cn(pathname==="/teacher"?"text-blue-500":"")} /></Link>
          <Link href={"/teacher/schedule"}><EventNoteIcon className={cn(pathname==="/teacher/schedule"?"text-blue-500":"")} /></Link>
          <Link href={"/teacher/students"}><GroupIcon className={cn(pathname==="/teacher/students"?"text-blue-500":"")} /></Link>
          <Link href={"/teacher/history"}><HistoryIcon className={cn(pathname==="/teacher/history"?"text-blue-500":"")} /></Link>
      </div>
    </header>
  );
};
export default Header;
