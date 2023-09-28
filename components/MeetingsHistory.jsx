"use client";
import React, {useEffect, useState} from "react";
import convertDate from "../utils/convertDate";
import dayjs from "dayjs";
import MeetingHistoryInfo from "./meetingHistoryInfo";
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const MeetingsHistory = ({ meetingHistory, setEarnedThisMonth }) => {
  let prevDay = null;
  const [paymentInfo, setPaymentInfo] = useState([])
    console.log(paymentInfo)

  return (
      <div >
        <div className={"flex-between"}>
        <h1 className={"mb-2 text-lg font-semibold"}>Historia płatności</h1>
            {!paymentInfo.length ?(
                <div className={"flex gap-2 text-rose-600 "}>
                    <ReportGmailerrorredIcon />
                    <p>Nie opłacone zajęcia!</p>
                </div>
            ):""}


        </div>
        <div className={"w-full h-72 border-2 overflow-y-scroll "}>
          {meetingHistory
              .slice()
              .reverse()
              .map((student, index) => {
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
                      <MeetingHistoryInfo student={student} key={index} meetingHistory={meetingHistory} setEarnedThisMonth={setEarnedThisMonth} setPaymentInfo={setPaymentInfo}/>
                    </div>
                );
              })}
        </div>
      </div>

  );
};

export default MeetingsHistory;
