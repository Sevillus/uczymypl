"use client";
import React, {useEffect, useState} from "react";
import { useSession } from "next-auth/react";
import dayjs from "dayjs";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import fetchStudent from "../utils/fetchStudent";

const MeetingPopUp = ({ user , setMeetingHistory}) => {
  const { data: session, status } = useSession();
  const [lastMeetings, setLastMeetings] = useState([]);

  useEffect(() => {
    if (user && user.meetingHistory) {
      const currentMonthLastMeetings = user.meetingHistory[dayjs().month()].lastMeetings;
      setLastMeetings(currentMonthLastMeetings);
      setMeetingHistory(user.meetingHistory[dayjs().month()].allMeetings)
    }
  }, [user]);

  const confirmHandler = async (student, option) => {
    await fetch(`api/meeting-history`, {
      method: "POST",
      body: JSON.stringify({
        addToHistory: option,
        student: student
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLastMeetings(prevLastMeetings => prevLastMeetings.filter(prevStudent => prevStudent._id !== student._id));
    setMeetingHistory(prev => [...prev, student])
  };


  if(lastMeetings.length !== 0){
  return (
    <div className={"w-full h-full absolute flex-center top-0 right-0 backgroundShadow "}>
      <div
        className={
          "py-6 px-4  border-2 lg:w-3/12 min-h-[40vh]  bg-white z-10 drop-shadow-xl flex flex-col gap-4 z-30  "
        }
      >
        <h1 className={"text-xl font-bold"}>Cześć {session?.user.name.split(" ")[0]} !</h1>
        <span>Czy poniższe zajęcia się odbyły?</span>
        {lastMeetings.map((student, index) => (
          <div key={index} className={"flex-between w-full border-b-2 py-2"}>
            <div>
              <p className={"font-semibold "}>
                {student.name}
              </p>
              <p className={"text-slate-400"}> {student.day} {dayjs(student.nextMeeting).format("D.MM")} o {student.time}</p>
            </div>

            <div className={"w-2/12 flex-between"}>
              <button>
                <ClearIcon onClick={() => confirmHandler(student, false)} className={"text-rose-600"}/>
              </button>
              <button onClick={() => confirmHandler(student, true)} >
                <DoneIcon className={"text-green-600"}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}}
export default MeetingPopUp;
