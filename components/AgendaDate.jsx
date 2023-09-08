import React from 'react'
import {generateDate} from "../utils/calendar";
import cn from "../utils/cn";

const AgendaDate = () => {
    return (
        <div className={"w-full h-full  grid grid-cols-7 "}>
            {generateDate().map(({ date, currentMonth }, index) => {
                return (
                    <div className={"border-2 flex-center h-32"} key={index}>
                        <p className={cn(currentMonth?"":"text-gray-400")}>
                            {date.date()}
                        </p>
                    </div>
                );
            })}

        </div>
    )
}
export default AgendaDate
