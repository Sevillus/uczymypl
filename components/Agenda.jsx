"use client"
import React, { useState, useEffect } from 'react';
import AgendaUser from "./AgendaUser";
import AgendaCalendar from "./AgendaCalendar";
import axios from "axios";
import AddStudent from "./AddStudent";
import meetingInfo from "../utils/meetingDay";

const Agenda = () => {
    const [userStudents, setUserStudents] = useState([]);
    const [userMenu, setUserMenu] = useState(false)

    const fetchStudent = async () => {
        try {
            console.log("Pobieranie danych");
            const res = await axios.get("http://localhost:3000/api/getUserData");
            const userData = res.data;
            // Zaktualizuj stan userStudents
            console.log("Przed setUserStudents", userStudents);
            setUserStudents(userData);
            console.log("Po setUserStudents", userData); // Użyj zmiennej userData
        } catch (e) {
            console.log(e);
        }
    };


    useEffect(() => {
        console.log("Component mounted");
        fetchStudent();
    }, []); // Uruchamiamy tylko raz po zamontowaniu komponentu



    const updatedUserStudents = userStudents.map(student => {
        const {nextMeetingDateConverted,hourConverted } = meetingInfo(student)
        return {
            ...student,
            meetingDay: nextMeetingDateConverted,
            meetingHour: hourConverted
        };
    });

    const sortedStudents = updatedUserStudents.sort((studentA, studentB) => {
        const dateA = new Date(studentA.meetingDay + ' ' + studentA.meetingHour);
        const dateB = new Date(studentB.meetingDay + ' ' + studentB.meetingHour);

        if (dateA < dateB) {
            return -1;
        } else if (dateA > dateB) {
            return 1;
        } else {
            return 0;
        }
    });




    return (
        <div className={"w-3/6 flex flex-col gap-3"}>
            <button onClick={() => setUserMenu(true)}> Dodaj ucznia</button>
            <h1 className={"text-lg font-semibold"}>Nadchodzące spotkania</h1>
            <div className={"flex-between"}>
                <div>
                    {sortedStudents.map((student) => (
                        <AgendaUser student={student} key={student._id} />
                    ))}
                </div>
                <div>
                    <AgendaCalendar />
                </div>
            </div>
            {userMenu && (
                <div className={"absolute w-full h-full  op start-0 z-10 flex-center"}>
                    <AddStudent fetchStudent={fetchStudent}  closeMenu={setUserMenu}/>
                </div>
            )}
        </div>
    );
};

export default Agenda;
