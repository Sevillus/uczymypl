"use client";
import React, { useState } from "react";
import convertDate from "../utils/convertDate";
import dayjs from "dayjs";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import cn from "../utils/cn";

const MeetingsHistory = ({ meetingHistory, setEarnedThisMonth }) => {
  let prevDay = null;

  let earned = 0;
  meetingHistory.map((student) => {
    earned = earned + student.price;
  });
  setEarnedThisMonth(earned);

  return (
    <div className={"w-full h-72 border-2 overflow-y-scroll "}>
      {meetingHistory
        .slice()
        .reverse()
        .map((student, index) => {
          const [isPaid, setIsPaid] = useState(true);
          const isSameDay =
            dayjs(student.nextMeeting).day() !== dayjs(prevDay).day();
          prevDay = student.nextMeeting;



          return (
            <div key={index} className={"flex gap-2 flex-col p-2"}>
              {isSameDay && (
                <div className={"border-b-2"}>
                  <p className={"font-medium"}>
                    {convertDate(student.nextMeeting).dayConverted}
                  </p>
                </div>
              )}

              <div className={"flex-between px-4"}>
                <p>{student.name}</p>
                <div className={"flex gap-4"}>
                  <p className={isPaid ? "text-green-600" : "text-rose-600"}>
                    {student.price},00zł
                  </p>
                  {isPaid ? (
                    <ClearIcon className={"w-4"}  />
                  ) : (
                    <DoneIcon className={"w-4"} />
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MeetingsHistory;
