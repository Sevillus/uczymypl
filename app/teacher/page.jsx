"use client"
import Agenda from "../../components/Agenda/Agenda";
import ProgressBar from "../../components/ProgressBar";
import MeetingsHistory from "../../components/MeetingsHistory";
import {useState} from "react";


const Page = () => {

    const [meetingHistory, setMeetingHistory] = useState([])
    const [earnedThisMonth, setEarnedThisMonth] = useState(0)
    const [userTarget, setUserTarget] = useState(0)


    return (
        <div className={"flex justify-between"}>
            <Agenda setMeetingHistory={setMeetingHistory} setUserTarget={setUserTarget}/>
            <div className={"h-full"}>
                <ProgressBar earnedThisMonth={earnedThisMonth} userTarget={userTarget}/>
                <MeetingsHistory meetingHistory={meetingHistory} setEarnedThisMonth={setEarnedThisMonth}/>
            </div>
        </div>
    )
}
export default Page
