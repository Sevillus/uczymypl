import React from "react";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import cn from "../../../../utils/cn";
import EventNoteIcon from "@mui/icons-material/EventNote";
import GroupIcon from "@mui/icons-material/Group";
import HistoryIcon from "@mui/icons-material/History";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <div className={" lg:hidden w-full flex-between padding-x py-2 border-t-2"}>
      <Link href={"/teacher"}>
        <HomeIcon
          className={cn(pathname === "/teacher" ? "text-blue-500" : "")}
        />
      </Link>
      <Link href={"/teacher/schedule"}>
        <EventNoteIcon
          className={cn(
            pathname === "/teacher/schedule" ? "text-blue-500" : "",
          )}
        />
      </Link>
      <Link href={"/teacher/students"}>
        <GroupIcon
          className={cn(
            pathname === "/teacher/students" ? "text-blue-500" : "",
          )}
        />
      </Link>
      <Link href={"/teacher/history"}>
        <HistoryIcon
          className={cn(pathname === "/teacher/history" ? "text-blue-500" : "")}
        />
      </Link>
    </div>
  );
};
export default MobileNavbar;
