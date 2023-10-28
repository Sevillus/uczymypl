"use client";
import React, { useEffect, useState } from "react";
import Agenda from "../../components/pages/teacher/dashboard/agenda/Agenda";
import ProgressBar from "../../components/pages/teacher/dashboard/ProgressBar";
import MeetingsHistory from "../../components/pages/teacher/history/meetingHistory/MeetingsHistory";
import Calendar from "../../components/pages/teacher/dashboard/calendar/Calendar";
import Chart from "../../components/pages/teacher/dashboard/Chart";
import axios from "axios";
import MeetingPopUp from "../../components/pages/teacher/dashboard/MeetingPopUp";
import useUserData from "../../hooks/useUserData";

const Dashboard = () => {
  const {
    meetingHistory,
    setMeetingHistory,
    earnedThisMonth,
    setEarnedThisMonth,
    userTarget,
    userStudents,
    isLoading,
    user,
    fetchData,
  } = useUserData();

  return (
    <div className="flex-column  lg:flex-row  lg:justify-between gap-10 p-2">
      <Agenda
        fetchData={fetchData}
        userStudents={userStudents}
        isLoading={isLoading}
      />
      {/*Desktop version*/}
      <div className="lg:w-4/12 hidden lg:flex flex flex-col justify-between">
        <Chart earned={earnedThisMonth} meetingHistory={meetingHistory} />
        <Calendar userStudents={userStudents} isLoading={isLoading} />
      </div>
      {/*Mobile version*/}
      <div className="w-full lg:hidden flex flex-col justify-between">
        <Calendar userStudents={userStudents} isLoading={isLoading} />
        <Chart earned={earnedThisMonth} meetingHistory={meetingHistory} />
      </div>

      <div className="lg:w-3/12 flex flex-col justify-between items-center">
        <ProgressBar
          earnedThisMonth={earnedThisMonth}
          userTarget={userTarget}
          isLoading={isLoading}
        />
        <div className="w-full mt-10 h-[50v] lg:h-[40vh]">
          <MeetingsHistory
            meetingHistory={meetingHistory}
            setEarnedThisMonth={setEarnedThisMonth}
            isLoading={isLoading}
          />
        </div>
      </div>
      <MeetingPopUp user={user} setMeetingHistory={setMeetingHistory} />
    </div>
  );
};

export default Dashboard;
