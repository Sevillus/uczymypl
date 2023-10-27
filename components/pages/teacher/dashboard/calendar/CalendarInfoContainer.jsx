import React from "react";
import { daysOfWeek } from "../../../../../constants/months";

const CalendarInfoContainer = ({ userStudents, selectedDay }) => {
  return (
    <div className={"calendarInfo__container"}>

      {userStudents.map((student, index) => (
        <div key={index}>
          { daysOfWeek[student.day.toLowerCase()] === selectedDay.day() && (
            <div className={"calendarInfo__box"}>
              <h2 className={"title-h2"}>{student.name.split(" ")[0]}</h2>
              <span className={"span w-24"}>
                {student.time} - {student.duration}
              </span>
            </div>
          )}
        </div>
      ))}

    </div>
  );
};
export default CalendarInfoContainer;
