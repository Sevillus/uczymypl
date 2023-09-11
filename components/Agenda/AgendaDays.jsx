import AgendaDay from "./AgendaDay";
import {generateDate} from "../../utils/calendar";

const AgendaDays = () => {
    const days = ["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"]


    return (
        <div className={"w-full  flex-between"}>
            {days.map( day => (
                <AgendaDay day={day} />
            ))}

        </div>
    )
}
export default AgendaDays
