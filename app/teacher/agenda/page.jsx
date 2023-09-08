import React from 'react'
import AgendaHeader from "../../../components/Agenda__header";
import AgendaDays from "../../../components/AgendaDays";
import AgendaDate from "../../../components/AgendaDate";


const Page = () => {
    return (
        <div className={"border-2 w-full rounded-lg "}>
            <AgendaHeader />
            <AgendaDays />
            <AgendaDate />
        </div>
    )
}
export default Page
