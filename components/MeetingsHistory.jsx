"use client";
import React, {useState } from "react";
import convertDate from "../utils/convertDate";
import dayjs from "dayjs";
import MeetingHistoryInfo from "./meetingHistoryInfo";
import CloseIcon from "@mui/icons-material/Close";
import GeneratePdfButton from "./GeneratePdfButton";

const MeetingsHistory = ({ meetingHistory, setEarnedThisMonth, isLoading }) => {
  let prevDay = null;
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [filtr, setFiltr] = useState(false);

  const filtrHandler = (option) => {
    setFiltr(option);
  };

  return (
    <div className={"meetingHistory"} style={{ height: "40vh" }}>
      <div className={"w-full flex-between"}>
        <h1 className={"title-h2"}>Historia płatności</h1>
        {paymentInfo.length ? (
          <div>
            {!filtr ? (
              <div
                className={"meetingHistory__alertBtn"}
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
      <div className={"meetingHistory__container"}>
        {isLoading ? (
          <div className="p-2">
            <div className="w-full h-8 border-b-2 ">
              <div className="loading-slate-300 w-32 h-6" />
            </div>
            <div className={"flex-column"}>
              {[1, 2, 3, 4, 5].map((key) => (
                <div
                  key={key}
                  className={"flex flex-between  w-full px-2 h-12"}
                >
                  <div className={"loading-slate-200 w-40"} />
                  <div className={"loading-slate-200 w-14"} />
                </div>
              ))}
            </div>
          </div>
        ) : (
          meetingHistory.slice().reverse().map((student, index) => {
            const isSameDay =
              dayjs(student.nextMeeting).day() !== dayjs(prevDay).day();
            prevDay = student.nextMeeting;

            return (
              <div key={index} className={"meetingHistory__box"}>

                <MeetingHistoryInfo
                  student={student}
                  key={index}
                  meetingHistory={meetingHistory}
                  setEarnedThisMonth={setEarnedThisMonth}
                  setPaymentInfo={setPaymentInfo}
                  paymentInfo={paymentInfo}
                  filtr={filtr}
                  setFiltr={setFiltr}
                  isSameDay={isSameDay}
                />
              </div>
            );
          })
        )}
      </div>
      <GeneratePdfButton meetingHistory={meetingHistory} />
    </div>
  );
};

export default MeetingsHistory;
