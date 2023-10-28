"use client";
import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ScheduleBox from "./ScheduleBox";
import ScheduleHeader from "./ScheduleHeader";

const ScheduleMobile = ({ user, isLoading }) => {
  const [currentDay, setCurrentDay] = useState(0);

  return (
    <div className="flex flex-col  lg:flex-row lg:hidden lg:justify-between  w-10/12  h-full lg:border">
      {user?.schedule?.map((day, index) =>
        index === currentDay ? (
          <div key={index} className=" w-full h-full lg:border gap-2 bg-slate-50 lg:hidden">
            <ScheduleHeader day={day} currentDay={currentDay} setCurrentDay={setCurrentDay}/>
            <ScheduleBox day={day} isLoading={isLoading}/>
          </div>
        ) : null,
      )}
    </div>
  );
};
export default ScheduleMobile;
