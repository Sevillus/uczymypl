"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Schedule = () => {
  const [user, setUser] = useState("");
  const [currentDay, setCurrentDay] = useState(0)

  const fetchStudent = async () => {
    try {
      const res = await axios.get("/api/getUserData");
      setUser(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);

  const moveForward = () => {
    currentDay === 6 ? setCurrentDay(0) : setCurrentDay(prev => prev + 1)
  }
  const moveBack = () => {
    currentDay === 0 ? setCurrentDay(6) : setCurrentDay(prev => prev -1 )
  }

  return (
      <div className="flex-center min-h-[60vh]  py-6">
        <div className="flex flex-col  lg:flex-row lg:justify-between  w-10/12  h-full lg:border">
          {user?.schedule?.map((day, index) =>
               index === currentDay ? (
                  <div key={index} className=" w-full h-full lg:border gap-2 bg-slate-50 lg:hidden">
                    <div className=" flex-between title-h2 p-4 bg-cyan-700 text-white text-center lg:shadow-xl rounded-t-lg lg:rounded-none">
                      <button onClick={moveBack} ><ArrowBackIcon /></button>
                      <h1 >{day.dayName}</h1>
                      <button onClick={moveForward}><ArrowForwardIcon /></button>
                    </div>
                    <div className="p-2 flex-column gap-4 h-96">
                      {day.studentsThisDay.map((student, studentIndex) => (
                          <div key={studentIndex} className="flex-column items-center">
                            <div className="flex flex-col w-full shadow-lg p-2 rounded-lg bg-blue-100">
                              <h2 className="title-h2">{student.time} - {student.duration}</h2>
                              <p className="ml-2">{student.name}</p>
                            </div>
                            <div className="w-10/12 h-2 border-b mt-2" />
                          </div>
                      ))}
                    </div>
                  </div>
              ) : null
          )}
          {user?.schedule?.map((day, index) =>
              (
                  <div key={index} className="flex-col w-full  h-full lg:border  bg-slate-50 hidden lg:flex">
                    <div className=" flex-center title-h2 p-4 bg-cyan-700 text-white text-center lg:shadow-xl rounded-t-lg lg:rounded-none">
                      <h1 >{day.dayName}</h1>
                    </div>
                    <div className="p-2 flex-column gap-4 h-[50vh] mt-2 overflow-y-auto">
                      {day.studentsThisDay.map((student, studentIndex) => (
                          <div key={studentIndex} className="flex-column items-center">
                            <div className="flex flex-col w-full shadow-lg p-2 rounded-lg bg-blue-100">
                              <h2 className="title-h2">{student.time} - {student.duration}</h2>
                              <p className="ml-2">{student.name}</p>
                            </div>
                            <div className="w-10/12 h-2 border-b mt-2" />
                          </div>
                      ))}
                    </div>
                  </div>
              )
          )}
        </div>


      </div>
  );
};

export default Schedule;
