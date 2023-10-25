
const CalendarDaysName = () => {
    const days = ["Pon", "Wt", "Śr", "Czw", "Pi", "Sob", "Nie"]

    return (
        <div className={"w-full flex "}>
            {days.map( (day , index) => (
                <div key={index} className={"calendarDayName"}>
                    <div  className={"flex-center border-2 w-full"}>
                        {day}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CalendarDaysName
