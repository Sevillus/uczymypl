"use client";
import React, { useEffect, useState } from "react";
import { daysOfWeek, daysOfWeekNames } from "../constants/months";
import axios from "axios";
import dayjs from "dayjs";

const Schedule = () => {
  const [user, setUser] = useState("");
  const [studentsThisDay, setStudentThisDay] = useState([]);

  // const fetchStudent = async () => {
  //   try {
  //     const res = await axios.get("/api/getUserData");
  //     setUser(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  //
  // useEffect(() => {
  //   fetchStudent();
  // }, []);




  return (
    <div className={"flex-center"}>
      <div className={"flex-between w-10/12"}>
        {user?.schedule?.map((day, index) => (
            <div key={index}>
              <h1 className="title">{day.dayName}</h1>
              <div>
                {day.studentsThisDay.map((student, studentIndex) => (
                    <div key={studentIndex}>
                      {student.time} - {student.duration} {student.name}
                    </div>
                ))}
              </div>
            </div>
        ))}
      </div>
    </div>
  );
};
export default Schedule;
