import React from "react";
import { generateDate } from "../../utils/calendar";
import cn from "../../utils/cn";
import convertDate from "../../utils/convertDate";
import dayjs from "dayjs";

const AgendaDate = (props) => {
  const {selectedDay, setSelectedDay, students } = props;
  const month = props.today

  const daysOfWeek = {
    niedziela: 0,
    poniedziałek: 1,
    wtorek: 2,
    środa: 3,
    czwartek: 4,
    piątek: 5,
    sobota: 6,
  };

  return (
    <div className={"w-full h-full  grid grid-cols-7 "}>
      {generateDate(month).map(({ date, currentMonth, today }, index) => {
        return (
          <div
            className={"flex-center w-14 border-2 p-1 h-10  cursor-pointer"}
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
export default AgendaDate;
