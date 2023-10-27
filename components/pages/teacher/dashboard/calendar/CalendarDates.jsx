import React from "react";
import { generateDate } from "../../../../../utils/calendar";
import cn from "../../../../../utils/cn";

const CalendarDates = ({ selectedDay, setSelectedDay, today }) => {
  return (
    <div className={"w-full h-full grid grid-cols-7"}>
      {generateDate(today).map(({ date, currentMonth, today }, index) => {
        return (
          <div
            className={
              "flex-center w-full min-[1900px]:h-12  h-8 border-2  cursor-pointer"
            }
            key={index}
            onClick={() => setSelectedDay(date)}
          >
            <p
              className={cn(
                "calendarDate",
                currentMonth ? "" : "text-gray-400",
                //selected day
                today &&
                  selectedDay.toDate().toDateString() !==
                    date.toDate().toDateString()
                  ? " calendarDate__selected"
                  : "",
                // today and selected date is different from today
                selectedDay.toDate().toDateString() ===
                  date.toDate().toDateString()
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
