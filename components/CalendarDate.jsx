import React from "react";
import { generateDate } from "../utils/calendar";
import cn from "../utils/cn";

const CalendarDate = (props) => {
  const {selectedDay, setSelectedDay, students } = props;
  const month = props.today

  return (
    <div className={"w-full h-full  grid grid-cols-7 "}>
      {generateDate(month).map(({ date, currentMonth, today }, index) => {
        return (
          <div
            className={"flex-center w-12 lg:w-16 h-10 lg:h-12  border-2  cursor-pointer"}
            key={index}
            onClick={() => setSelectedDay(date)}
          >
            <p
              className={cn(
                "text-sm p-3 w-6 h-6 flex-center",
                currentMonth ? "" : "text-gray-400",
                today &&
                  selectedDay.toDate().toDateString() !==
                    date.toDate().toDateString()
                  ? "text__main-color font-semibold border rounded-full  border-current"
                  : "",
                selectedDay.toDate().toDateString() ===
                  date.toDate().toDateString()
                  ? "bg__main-color text-white border rounded-full "
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
export default CalendarDate;
