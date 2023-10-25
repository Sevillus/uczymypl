"use client";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Profile from "./Profile";
import MenuIcon from "@mui/icons-material/Menu";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";
import HomeIcon from "@mui/icons-material/Home";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "../../../utils/cn";
import LogoutIcon from "@mui/icons-material/Logout";
import { signIn, signOut } from "next-auth/react";
import useBurgerMenu from "../../../hooks/useBurgerMenu";
import useScroll from "../../../hooks/useScroll";

const Header = ({ session }) => {
  const name = session?.user.name;
  const img = session?.user.image;
  const target = session?.user.target;

  const { toggleMenu } = useBurgerMenu();
  const pathname = usePathname();
  useScroll();
  return (
    <header
      className={
        "fixed ease-out duration-300 top-0 lg:relative z-50 w-full h-24 lg:h-fit flex flex-col  lg:flex-row lg:justify-between bg-slate-700  text-white  padding-x  lg:py-4"
      }
    >
      <div className={"flex-between mt-2 lg:mt-0"}>
        <Logo />
        {name ? (
          <MenuIcon className={"lg:hidden "} onClick={toggleMenu} />
        ) : (
          <button
            type="button"
            onClick={() => {
              signIn("google", { callbackUrl: `/teacher` });
            }}
            className="outline_btn text-white text-sm flex items-center gap-4 pointer p-1 border-slate-400 w-fit rounded-lg border lg:hidden"
          >
            Zaloguj się
          </button>
        )}
        <div className={"burgerMenu flex-center relative lg:hidden"}>
          <div
            className={"padding-y padding-x w-full h-full flex flex-col gap-10"}
          >
            <CloseIcon
              className={"text-black absolute right-2"}
              onClick={toggleMenu}
            />
            <div className={"w-9/12 text-black "}>
              <Profile name={name} img={img} target={target} />
            </div>
            <button
              type="button"
              onClick={() => {
                signOut({ callbackUrl: "/" });
              }}
              className="outline_btn text-black flex items-center gap-4 pointer p-2 border-slate-400 w-fit rounded-lg border"
            >
              <p>Wyloguj</p>
              <LogoutIcon className={"text-sm"} />
            </button>
          </div>
        </div>
      </div>
      <div className={"hidden lg:flex justify-between items-center gap-10 "}>
        <Navbar />
        <Profile name={name} img={img} />
      </div>
      <div
        className={" lg:hidden w-full flex-between padding-x py-2 border-t-2"}
      >
        <Link href={"/dashboard"}>
          <HomeIcon
            className={cn(pathname === "/dashboard" ? "text-blue-500" : "")}
          />
        </Link>
        <Link href={"/dashboard/schedule"}>
          <EventNoteIcon
            className={cn(
              pathname === "/dashboard/schedule" ? "text-blue-500" : "",
            )}
          />
        </Link>
        <Link href={"/dashboard/students"}>
          <GroupIcon
            className={cn(
              pathname === "/dashboard/students" ? "text-blue-500" : "",
            )}
          />
        </Link>
        <Link href={"/dashboard/history"}>
          <HistoryIcon
            className={cn(
              pathname === "/dashboard/history" ? "text-blue-500" : "",
            )}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
