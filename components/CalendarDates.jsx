import React from "react";
import { generateDate } from "../utils/calendar";
import cn from "../utils/cn";

const CalendarDates = ({ selectedDay, setSelectedDay, today }) => {
  return (
    <div className={"calendarDates"}>
      {generateDate(today).map(({ date, currentMonth, today }, index) => {
        return (
          <div className={"calendarDate__box"} key={index} onClick={() => setSelectedDay(date)}>
            <p
              className={
                 cn(
                     "calendarDate",
                    // days not this month
                    currentMonth ? "" : "text-gray-400",
                    //selected day
                    today && selectedDay.toDate().toDateString() !== date.toDate().toDateString()
                      ? " calendarDate__selected"
                      : "",
                     // today and selected date is different from today
                    selectedDay.toDate().toDateString() === date.toDate().toDateString()
                      ? "calendarDate__today "
                      : "",
                   )}
            >
              {date.date()}
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default CalendarDates;
