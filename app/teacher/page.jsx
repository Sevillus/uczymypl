"use client"
import Agenda from "../../components/Agenda";
import ProgressBar from "../../components/ProgressBar";
import MeetingsHistory from "../../components/MeetingsHistory";
import React, {useState} from "react";
import Calendar from "../../components/Calendar";
import Stacked from "../../components/Stacked";




const Page = () => {

    const [meetingHistory, setMeetingHistory] = useState([])
    const [earnedThisMonth, setEarnedThisMonth] = useState(0)
    const [userTarget, setUserTarget] = useState(0)
    const [userStudents, setUserStudents] = useState([]);

    return (
        <div className={"flex flex-col lg:flex-row  lg:justify-between "}>
            <Agenda  setMeetingHistory={setMeetingHistory} setUserTarget={setUserTarget} userStudents={userStudents} setUserStudents={setUserStudents}/>
            <div className={"flex flex-col justify gap-10"}>
                <Calendar  userStudents={userStudents}/>
                <MeetingsHistory meetingHistory={meetingHistory} setMeetingHistory={setMeetingHistory} setEarnedThisMonth={setEarnedThisMonth}/>
            </div>
            <div className={"h-full flex flex-col justify-center items-center gap-10 "}>
                <ProgressBar earnedThisMonth={earnedThisMonth} userTarget={userTarget}/>
                <Stacked />
            </div>
        </div>
    )
}
export default Page