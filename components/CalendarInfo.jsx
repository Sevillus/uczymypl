import { daysOfWeek } from "../constants/months";

const CalendarInfo = ({ selectedDay, userStudents, isLoading }) => {
  return (
    <div className={"calendarInfo"}>
      <div className={"border-b-2"}>
        <h1 className={"title-h2"}>Spotkania</h1>
        <span className={"span p-2"}>{selectedDay.format("DD.MM.YYYY")}</span>
      </div>
      <div className={"calendarInfo__container"}>
        {isLoading
          ? [1, 2, 3, 4].map((key) => (
              <div key={key} className={"flex-column p-2 gap-10"}>
                <p className={"loading-slate-300 w-10"} />
                <p className={"loading-slate-20 w-24"} />
              </div>
            ))
          : userStudents.map((student, index) => (
              <div key={index}>
                {daysOfWeek[student.day.toLowerCase()] === selectedDay.day() ? (
                  <div className={"calendarInfo__box"}>
                    <h2 className={"title-h2"}>{student.name.split(" ")[0]}</h2>
                    <span className={"span w-24"}>
                      {student.time} - {student.duration}
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
      </div>
    </div>
  );
};
export default CalendarInfo;
