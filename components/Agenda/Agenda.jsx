"use client";
import React, { useState, useEffect } from "react";
import AgendaUser from "./AgendaUser";
import AgendaCalendar from "./AgendaCalendar";
import axios from "axios";
import meetingInfo from "../../utils/meetingDay";
import AddStudent from "../AddStudent";
import MeetingPopUp from "../MeetingPopUp";
import dayjs from "dayjs";

const Agenda = ({
  setMeetingHistory,
  setUserTarget,
  setUserStudents,
  userStudents,
}) => {
  const [userMenu, setUserMenu] = useState(false);
  const [user, setUser] = useState(null);

  const fetchStudent = async () => {
    try {
      const res = await axios.get("/api/getUserData");
      setUserStudents(res.data.students);
      setUser(res.data);
      setUserTarget(res.data.target);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []); // Uruchamiamy tylko raz po zamontowaniu komponentu

  return (
    <div className={"w-4/12  h-screen flex flex-col gap-3 "}>
      <div className={"flex-between"}>
        <h1 className={"title"}>Nadchodzące spotkania</h1>
        <button className={"btn"} onClick={() => setUserMenu(true)}>
          {" "}
          Dodaj Ucznia
        </button>
      </div>
      <div className={"flex flex-col gap-3 p-2 overflow-y-auto h-fit  "}>
        {userStudents.map((student) => (
          <AgendaUser
            fetchStudent={fetchStudent}
            student={student}
            key={student._id}
          />
        ))}

        {userMenu && (
          <div className={"absolute w-full h-full  op top-0 z-10 flex-center"}>
            <AddStudent
              fetchStudent={fetchStudent}
              apiUrl={"/api/add-student"}
              closeMenu={setUserMenu}
            />
          </div>
        )}
        <MeetingPopUp user={user} setMeetingHistory={setMeetingHistory} />
      </div>
    </div>
  );
};

export default Agenda;
