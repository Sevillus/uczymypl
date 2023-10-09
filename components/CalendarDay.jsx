import React from 'react'

const CalendarDay = (props) => {
    const { day } = props

    return (
        <div className={"agenda__dayName"}>
            <div  className={"flex-center border-2"}>
                {day}
            </div>
        </div>

    )
}
export default CalendarDay
