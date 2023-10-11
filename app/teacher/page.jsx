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

  return (
    <div className={"flex flex-col lg:flex-row  lg:justify-between py-4"} >
      <Agenda
        setMeetingHistory={setMeetingHistory}
        setUserTarget={setUserTarget}
        userStudents={userStudents}
        setUserStudents={setUserStudents}
      />
      <div className={"flex flex-col justify-between gap-10 lg:w-4/12"}>
        <Stacked earned={earnedThisMonth} meetingHistory={meetingHistory}/>
        <Calendar userStudents={userStudents} />
      </div>
      <div
        className={
          "flex flex-col justify-between   lg:w-3/12"
        }
      >
        <ProgressBar
          earnedThisMonth={earnedThisMonth}
          userTarget={userTarget}
        />

        <MeetingsHistory
          meetingHistory={meetingHistory}
          setMeetingHistory={setMeetingHistory}
          setEarnedThisMonth={setEarnedThisMonth}
        />
      </div>
    </div>
  );
};
export default Page;
