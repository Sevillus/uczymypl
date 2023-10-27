import { daysOfWeek } from "../../../../../constants/months";
import CalendarLoading from "./CalendarLoading";
import CalendarInfoContainer from "./CalendarInfoContainer";

const CalendarInfo = ({ selectedDay, userStudents, isLoading }) => {
  return (
    <div className={"calendarInfo"}>
      <div className={"border-b-2"}>
        <h1 className={"title-h2"}>Spotkania</h1>
        <span className={"span p-2"}>{selectedDay.format("DD.MM.YYYY")}</span>
      </div>

        {isLoading
          ? (
              <CalendarLoading />
            )
          :(
              <CalendarInfoContainer userStudents={userStudents} selectedDay={selectedDay}/>
            )

        }

    </div>
  );
};
export default CalendarInfo;
