"use client"
import React, {useEffect, useState} from 'react'
import AgendaHeader from "../../../components/Agenda/Agenda__header";
import AgendaDays from "../../../components/Agenda/AgendaDays";
import AgendaDate from "../../../components/Agenda/AgendaDate";
import dayjs from "dayjs";
import axios from "axios";
import {daysOfWeek} from "../../../constants/months";


const Page = () => {

    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate.month())
    const [selectedDay, setSelectedDay] = useState(currentDate)

    const [userStudents, setUserStudents] = useState([]);


    const fetchStudent = async () => {
        try {
            console.log("Pobieranie danych");
            const res = await axios.get("http://localhost:3000/api/getUserData");
            const userData = res.data;

            setUserStudents(userData.students);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchStudent();
    }, []); // Uruchamiamy tylko raz po zamontowaniu komponentu


    return (
        <div className={"flex items-start overflow-hidden gap-2"}>
            <div className={"border-2 w-9/12 lg:w-10/12 rounded-lg "}>
                <AgendaHeader today={today} setToday={setToday} />
                <AgendaDays />
                <AgendaDate students={userStudents}  today={today} selectedDay={selectedDay} setSelectedDay={setSelectedDay}/>
            </div>
            <div className={"flex w-2/12 "}>
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
export default Page
