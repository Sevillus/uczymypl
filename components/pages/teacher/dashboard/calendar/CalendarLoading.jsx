import React from "react";

const CalendarLoading = () => {
  return (
    <div className={"calendarInfo__container"}>
      {[1, 2, 3, 4].map((key) => (
        <div key={key} className={"flex-column p-2 gap-10"}>
          <p className={"loading-slate-300 w-10"} />
          <p className={"loading-slate-20 w-24"} />
        </div>
      ))}
    </div>
  );
};
export default CalendarLoading;
