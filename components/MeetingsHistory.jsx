"use client";
import React, { useEffect, useState } from "react";
import convertDate from "../utils/convertDate";
import dayjs from "dayjs";
import MeetingHistoryInfo from "./meetingHistoryInfo";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import GeneratePdfButton from "./GeneratePdfButton";

const MeetingsHistory = ({ meetingHistory, setEarnedThisMonth }) => {
  let prevDay = null;
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [filtr, setFiltr] = useState(false);

  const filtrHandler = (option) => {
    setFiltr(option);
  };

  return (
    <div className={"flex flex-col items-center gap-2 w-10/12 "}>
      <div className={"w-full flex-between"}>
        <h1 className={"text-xl"}>Historia płatności</h1>
        {paymentInfo.length ? (
          <div>
            {!filtr ? (
              <div
                className={"text-rose-600 cursor-pointer"}
                onClick={() => filtrHandler(true)}
              >
                <p>Brak płatności!</p>
              </div>
            ) : (
              <div
                className={"flex gap-2  cursor-pointer"}
                onClick={() => filtrHandler(false)}
              >
                <p>Wyłącz filtr</p>
                <CloseIcon />
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={"w-full h-80 border-2 overflow-y-scroll bg-slate-50"}>
        {meetingHistory.slice().reverse().map((student, index) => {
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
              <MeetingHistoryInfo
                student={student}
                key={index}
                meetingHistory={meetingHistory}
                setEarnedThisMonth={setEarnedThisMonth}
                setPaymentInfo={setPaymentInfo}
                paymentInfo={paymentInfo}
                filtr={filtr}
                setFiltr={setFiltr}
              />
            </div>
          );
        })}
      </div>
      <GeneratePdfButton meetingHistory={meetingHistory} />
    </div>
  );
};

export default MeetingsHistory;
