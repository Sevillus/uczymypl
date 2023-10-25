"use client";
import React, {useState } from "react";
import dayjs from "dayjs";
import CalendarDates from "./CalendarDates";
import CalendarHeader from "./CalendarHeader";
import CalendarInfo from "./CalendarInfo";
import CalendarDaysName from "./CalendarDaysName";

const Calendar = ({ userStudents, isLoading }) => {
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate.month());
  const [selectedDay, setSelectedDay] = useState(currentDate);

  return (
    <div className={"calendar"}>
      <div className={"calendar__container"}>
        <CalendarHeader
            today={today}
            setToday={setToday}
        />
        <CalendarDaysName />
        <CalendarDates
          students={userStudents}
          today={today}
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
        />
      </div>
      <CalendarInfo
        selectedDay={selectedDay}
        userStudents={userStudents}
        isLoading={isLoading}
      />
    </div>
  );
};
export default Calendar;
