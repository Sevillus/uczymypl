import AgendaDay from "./AgendaDay";
import {generateDate} from "../../utils/calendar";

const AgendaDays = () => {
    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]


    return (
        <div className={"w-full  flex-between"}>
            {days.map( (day , index) => (
                <AgendaDay day={day} key={index} />
            ))}

        </div>
    )
}
export default AgendaDays
