import React from 'react'
import AgendaUser from "./AgendaUser";
import AgendaCalendar from "./AgendaCalendar";

const Agenda = () => {
    return (
        <div className={"w-3/6 flex flex-col gap-3"}>
            <h1 className={"text-lg font-semibold"}>Nadchodzące spotkania</h1>
            <div className={"flex-between"}>
                <div>
                    <AgendaUser />
                </div>
                <div>
                    <AgendaCalendar />
                </div>
            </div>
        </div>
    )
}
export default Agenda
