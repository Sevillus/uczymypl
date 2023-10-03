"use client"
import React, {useEffect, useState} from 'react'
import {daysOfWeek, daysOfWeekNames} from "../constants/months";
import axios from "axios";


const Schedule = () => {

    const [students, setStudents] = useState([])
    const [studentsThisDay, setStudentThisDay] = useState([])

    const fetchStudent = async () => {
        try {
            const res = await axios.get("http://localhost:3000/api/getUserData");
            setStudents(res.data.students);

        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchStudent()
    }, []);

    students.forEach(student => {
        daysOfWeekNames.forEach(day => {
            student.day === day ? setStudentThisDay(prev => prev[daysOfWeek.`${day}`])
        })
    })

    return (
        <div className={"flex-center"}>
            <div className={"flex-between w-10/12"}>
                {daysOfWeekNames.map((day, index) => (
                    <div key={index} className={"title "}>
                        {day}
                    </div>
                )) }
            </div>
        </div>

    )
}
export default Schedule
