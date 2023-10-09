import CalendarDay from "./CalendarDay";
import {generateDate} from "../utils/calendar";

const CalendarDays = () => {
    const days = ["Pon", "Wt", "Śr", "Czw", "Pi", "Sob", "Nie"]


    return (
        <div className={"w-full  flex-between"}>
            {days.map( (day , index) => (
                <CalendarDay day={day} key={index} />
            ))}

        </div>
    )
}
export default CalendarDays
