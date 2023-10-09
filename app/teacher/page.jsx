"use client"
import Agenda from "../../components/Agenda";
import ProgressBar from "../../components/ProgressBar";
import MeetingsHistory from "../../components/MeetingsHistory";
import React, {useState} from "react";
import Calendar from "../../components/Calendar";




const Page = () => {

    const [meetingHistory, setMeetingHistory] = useState([])
    const [earnedThisMonth, setEarnedThisMonth] = useState(0)
    const [userTarget, setUserTarget] = useState(0)
    const [userStudents, setUserStudents] = useState([]);

    return (
        <div className={"flex flex-col lg:flex-row  lg:justify-between "}>
            <Agenda setMeetingHistory={setMeetingHistory} setUserTarget={setUserTarget} userStudents={userStudents} setUserStudents={setUserStudents}/>
            <Calendar userStudents={userStudents}/>
            <div className={"h-full"}>
                <ProgressBar earnedThisMonth={earnedThisMonth} userTarget={userTarget}/>
                <MeetingsHistory meetingHistory={meetingHistory} setMeetingHistory={setMeetingHistory} setEarnedThisMonth={setEarnedThisMonth}/>
            </div>
        </div>
    )
}
export default Page