import React from "react";
import MeetingHistoryBox from "./meetingHistoryBox";
import dayjs from "dayjs";


const MeetingHistoryContainer = ({
  meetingHistory,
  setEarnedThisMonth,
  setPaymentInfo,
  paymentInfo,
  filtr,
  setFiltr,
}) => {
  let prevDay=null
  return (
    <div className={"meetingHistory__container"}>
      { meetingHistory[0] ? (
        meetingHistory.slice().reverse().map((student, index) => {
          //Checking if prev rendered student has the same meeting day, if true display one date
          const isSameDay = dayjs(student.nextMeeting).day() !== dayjs(prevDay).day();
          prevDay = student.nextMeeting;

          return(
            <MeetingHistoryBox
              student={student}
              key={index}
              isSameDay={isSameDay}
              meetingHistory={meetingHistory}
              setEarnedThisMonth={setEarnedThisMonth}
              setPaymentInfo={setPaymentInfo}
              paymentInfo={paymentInfo}
              filtr={filtr}
              setFiltr={setFiltr}
            />)
      })
      ) : (
        <div className={"flex-center h-full text-slate-400"}>
          <em>Brak spotkań w tym miesiacu...</em>
        </div>
      )}
    </div>
  );
};
export default MeetingHistoryContainer;
