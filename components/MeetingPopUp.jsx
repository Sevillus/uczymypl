"use client"
import React from "react";
import {useSession} from "next-auth/react";
import dayjs from "dayjs";

const MeetingPopUp = ({user}) => {

    const {data: session, status} = useSession()
    console.log(user)
  return (
      <div  className={
          "w-1/6 absolute flex-center right-0"
      }>
          <div
              className={
                  "py-6 padding-x border-2 w-full h-5/6 bg-white z-10 drop-shadow-xl flex flex-col gap-4  "
              }
          >
              <h1>Cześć {session?.user.name.split(" ")[0]} !</h1>
              <span>Czy poniższe zajęcia się odbyły?</span>
              {user?.meetingHistory[8].meetings.map(student => (
                  <div>
                      {student.name} {dayjs(student.nextMeeting).format("MMM D YYYY H m")}
                  </div>
              ))}
          </div>
      </div>

  );
};
export default MeetingPopUp;
