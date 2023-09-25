import React from "react";
import convertDate from "../utils/convertDate";
import dayjs from "dayjs";

const MeetingsHistory = ({ meetingHistory , setEarnedThisMonth}) => {
  let prevDay = null;

  let earned = 0
  meetingHistory.map(student => {
    earned = earned + student.price
  })
  setEarnedThisMonth(earned)


  return (
    <div className={"w-full h-72 border-2 overflow-y-scroll "}>
      {meetingHistory.slice().reverse().map((student, index) => {
        const isSameDay = dayjs(student.nextMeeting).day() !== dayjs(prevDay).day();
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
              <p>{student.price}zł</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MeetingsHistory;
