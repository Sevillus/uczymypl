"use client";
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import AgendaHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarDate from "./CalendarDate";
import { daysOfWeek } from "../constants/months";
import CalendarHeader from "./CalendarHeader";
import CalendarInfo from "./CalendarInfo";

const Calendar = ({ userStudents ,isLoading }) => {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate.month());
  const [selectedDay, setSelectedDay] = useState(currentDate);

  return (
    <div className={"w-full flex lg:justify-between lg:flex-row flex-col h-3/6"}>
      <div className={"shadow-lg rounded-lg border h-fit bg-slate-50 lg:w-8/12"}>
        <CalendarHeader today={today} setToday={setToday} />
        <CalendarDays />
        <CalendarDate
          students={userStudents}
          today={today}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
      <CalendarInfo selectedDay={selectedDay} userStudents={userStudents} isLoading={isLoading}/>
    </div>
  );
};
export default Calendar;
