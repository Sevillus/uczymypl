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
    setMeetingHistory(prev => [...prev.reverse(), student])
  };



  if(lastMeetings.length !== 0){
  return (
    <div className={"w-full h-full absolute flex-center top-0 right-0 backgroundShadow"}>
      <div
        className={
          "py-6 padding-x border-2 w-2/6 h-5/6 bg-white z-10 drop-shadow-xl flex flex-col gap-4 z-30  "
        }
      >
        <h1>Cześć {session?.user.name.split(" ")[0]} !</h1>
        <span>Czy poniższe zajęcia się odbyły?</span>
        {lastMeetings.map((student, index) => (
          <div key={index} className={"flex-between"}>
            {student.name} {dayjs(student.nextMeeting).format("MMM D YYYY H m")}
            <div>
              <button onClick={() => confirmHandler(student, true)}>
                <DoneIcon />
              </button>
              <button>
                <ClearIcon onClick={() => confirmHandler(student, false)}/>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}}
export default MeetingPopUp;
