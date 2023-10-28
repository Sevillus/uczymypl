"use client";
import React, { useState } from "react";
import GeneratePdfButton from "./GeneratePdfButton";
import MeetingHistoryFiltr from "./MeetingHistoryFiltr";
import MeetingHistoryContainer from "./MeetingHistoryContainer";
import MeetingHistoryLoading from "./MeetingHistoryLoading";

const MeetingsHistory = ({ meetingHistory, setEarnedThisMonth, isLoading }) => {
  const [paymentInfo, setPaymentInfo] = useState([]);
  const [filtr, setFiltr] = useState(false);

  const filtrHandler = (option) => {
    setFiltr(option);
  };

  return (
    <div className={"meetingHistory h-full"}>
      <div className={"w-full flex-between"}>
        <h1 className={"title-h2"}>Historia płatności</h1>
        <MeetingHistoryFiltr
          paymentInfo={paymentInfo}
          filtr={filtr}
          filtrHandler={filtrHandler}
        />
      </div>
      { isLoading ? (
        <MeetingHistoryLoading />
      ) : (
        <MeetingHistoryContainer
          meetingHistory={meetingHistory}
          filtr={filtr}
          paymentInfo={paymentInfo}
          setEarnedThisMonth={setEarnedThisMonth}
          setFiltr={setFiltr}
          setPaymentInfo={setPaymentInfo}
        />
      )}
      <GeneratePdfButton meetingHistory={meetingHistory} />
    </div>
  );
};

export default MeetingsHistory;
