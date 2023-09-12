"use client"
import React, { useState, useEffect } from 'react';
import AgendaUser from "./AgendaUser";
import AgendaCalendar from "./AgendaCalendar";
import axios from "axios";
import meetingInfo from "../../utils/meetingDay";
import AddStudent from "../AddStudent";


const Agenda = () => {
    const [userStudents, setUserStudents] = useState([]);
    const [userMenu, setUserMenu] = useState(false)
    const [sortedStudents , setSortedStudents] = useState([])

    const fetchStudent = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/getUserData");
            setUserStudents(res.data);
        } catch (e) {
            console.log(e);
        }
    };


    useEffect(() => {
        fetchStudent();
    }, []); // Uruchamiamy tylko raz po zamontowaniu komponentu











    return (
        <div className={"w-2/6 flex flex-col gap-3"}>
            <div className={"flex-between"}>
                <h1 className={"text-lg font-semibold "}>Nadchodzące spotkania</h1>
                <button className={"border-2 py-1 px-3 rounded-xl"} onClick={() => setUserMenu(true)}> Dodaj</button>
            </div>
            <div className={"flex-between"}>
                <div>
                    {userStudents.map((student) => (
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