import React from 'react'

const AgendaDay = (props) => {
    const { day } = props

    return (
        <div className={"agenda__dayName"}>
            <div  className={"flex-center border-2"}>
                {day}
            </div>
        </div>

    )
}
export default AgendaDay
