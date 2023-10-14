"use client";
import Agenda from "../../components/Agenda";
import ProgressBar from "../../components/ProgressBar";
import MeetingsHistory from "../../components/MeetingsHistory";
import React, { useState } from "react";
import Calendar from "../../components/Calendar";
import Chart from "../../components/Chart";

const Page = () => {
  const [meetingHistory, setMeetingHistory] = useState([]);
  const [earnedThisMonth, setEarnedThisMonth] = useState(0);
  const [userTarget, setUserTarget] = useState(0);
  const [userStudents, setUserStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Dodaj stan do śledzenia ładowania danych

  return (
    <div
      className={"dashboard__container "}
    >
      <Agenda
        setMeetingHistory={setMeetingHistory}
        setUserTarget={setUserTarget}
        userStudents={userStudents}
        setUserStudents={setUserStudents}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <div className={"flex-column justify-between lg:w-4/12 hidden lg:flex"}>
        <Chart earned={earnedThisMonth} meetingHistory={meetingHistory} />
        <Calendar userStudents={userStudents} isLoading={isLoading} />
      </div>
      <div className={"flex-column justify-between  w-full  lg:hidden"}>
        <Calendar userStudents={userStudents} isLoading={isLoading} />
        <Chart earned={earnedThisMonth} meetingHistory={meetingHistory} />
      </div>
      <div className={"flex-column justify-between   lg:w-3/12"}>
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
