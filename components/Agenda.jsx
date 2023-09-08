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
    const [sortedStudents , setSortedStudents] = useState([])

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






    useEffect(() => {
        const sortedStudents = userStudents.map(student => {
            const { nextMeetingDateConverted, hourConverted } = meetingInfo(student);
            return {
                ...student,
                meetingDay: nextMeetingDateConverted,
                meetingHour: hourConverted
            };
        }).sort((studentA, studentB) => {
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

        // Zaktualizuj posortowaną listę studentów
        setSortedStudents(sortedStudents);
    }, [userStudents]);





    return (
        <div className={"w-2/6 flex flex-col gap-3"}>
            <div className={"flex-between"}>
                <h1 className={"text-lg font-semibold "}>Nadchodzące spotkania</h1>
                <button className={"border-2 py-1 px-3 rounded-xl"} onClick={() => setUserMenu(true)}> Dodaj</button>
            </div>
            <div className={"flex-between"}>
                <div>
                    {sortedStudents.map((student) => (
                        <AgendaUser fetchStudent={fetchStudent} student={student} key={student._id} />
                    ))}
                </div>
            </div>
            {userMenu && (
                <div className={"absolute w-full h-full  op top-0 z-10 flex-center"}>
                    <AddStudent fetchStudent={fetchStudent}  apiUrl={"/api/add-student"} closeMenu={setUserMenu}/>
                </div>
            )}

        </div>
    );
};

export default Agenda;
