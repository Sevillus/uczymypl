"use client"
import React, {useEffect, useState} from 'react'
import dayjs from "dayjs";
import AgendaHeader from "./Agenda/Agenda__header";
import AgendaDays from "./Agenda/AgendaDays";
import AgendaDate from "./Agenda/AgendaDate";
import {daysOfWeek} from "../constants/months";


const Calendar = ({userStudents}) => {

    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate.month())
    const [selectedDay, setSelectedDay] = useState(currentDate)






    console.log()
    return (
        <div >
            <div className={"border rounded-lg "}>
                <AgendaHeader today={today} setToday={setToday} />
                <AgendaDays />
                <AgendaDate students={userStudents}  today={today} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
            </div>
            <div className={" "}>
                <div className={"flex flex-col border-l-2 border-current"}>
                    <h1 className={"text-lg"}>Spotkania na {selectedDay.format('DD/MM/YYYY')}</h1>
                    {userStudents.map((student, index) => (
                        <div key={index}>
                            { daysOfWeek[student.day.toLowerCase()] === selectedDay.day() ? `${student.name} o ${student.time}` : ""
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}
export default Calendar
