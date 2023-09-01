import React from "react";
import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const AgendaUser = () => {
  const student = [
    {
      name: "Rafal Czarnecki",
      image: "/rafal.jpg",
      day: "Mon",
      hour: "17:15",
    },
  ];

  return (
    <div className={"padding-x padding-y flex-center gap-20 border-b-2"}>
      <div>
        <h2 className={"text-md font-semibold"}>{student[0].name}</h2>
        <div className={"flex gap-2"}>
          <CalendarMonthIcon />
          <span>12 Sierpień 2023 o 17:15</span>
        </div>
      </div>
      <button>
        <MoreHorizIcon />
      </button>
    </div>
  );
};
export default AgendaUser;
