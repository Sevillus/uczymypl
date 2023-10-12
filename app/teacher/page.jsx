"use client";
import Agenda from "../../components/Agenda";
import ProgressBar from "../../components/ProgressBar";
import MeetingsHistory from "../../components/MeetingsHistory";
import React, { useState } from "react";
import Calendar from "../../components/Calendar";
import Stacked from "../../components/Stacked";

const Page = () => {
  const [meetingHistory, setMeetingHistory] = useState([]);
  const [earnedThisMonth, setEarnedThisMonth] = useState(0);
  const [userTarget, setUserTarget] = useState(0);
  const [userStudents, setUserStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Dodaj stan do śledzenia ładowania danych

  return (
    <div className={"flex flex-col gap-10 lg:flex-row  lg:justify-between p-2 "} >
      <Agenda
        setMeetingHistory={setMeetingHistory}
        setUserTarget={setUserTarget}
        userStudents={userStudents}
        setUserStudents={setUserStudents}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <div className={"flex flex-col justify-between gap-10 lg:w-4/12 hidden lg:flex"}>
        <Stacked earned={earnedThisMonth} meetingHistory={meetingHistory}/>
        <Calendar userStudents={userStudents} isLoading={isLoading}/>
      </div>
        <div className={"flex flex-col justify-between gap-10 lg:w-4/12 lg:hidden"}>
            <Calendar userStudents={userStudents} isLoading={isLoading}/>
            <Stacked earned={earnedThisMonth} meetingHistory={meetingHistory}/>

        </div>
      <div
        className={
          "flex flex-col gap-10 lg:justify-between   lg:w-3/12"
        }
      >
        <ProgressBar
          earnedThisMonth={earnedThisMonth}
          userTarget={userTarget}
          isLoading={isLoading}
        />

        <MeetingsHistory
          meetingHistory={meetingHistory}
          setMeetingHistory={setMeetingHistory}
          setEarnedThisMonth={setEarnedThisMonth}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};
export default Page;
