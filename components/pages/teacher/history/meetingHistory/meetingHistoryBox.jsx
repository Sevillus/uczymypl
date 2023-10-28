import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import convertDate from "../../../../../utils/convertDate";
import { useMeetingHistory } from "../../../../../hooks/useMeetingHistory";
import MeetingHistoryDate from "./MeetingHistoryDate";
import MeetingHistoryStudent from "./MeetingHistoryStudent";

const MeetingHistoryBox = ({
  student,
  meetingHistory,
  setEarnedThisMonth,
  paymentInfo,
  setPaymentInfo,
  filtr,
  setFiltr,
  isSameDay
}) => {
  const { payment,  addPayment } = useMeetingHistory(
    student,
    meetingHistory,
    setEarnedThisMonth,
    paymentInfo,
    setPaymentInfo,
    filtr,
    setFiltr,
  );

  return (
    <div className="meetingHistory__box">
      {!filtr || !payment ? (
        <div className="p-2">
          <MeetingHistoryDate student={student} isSameDay={isSameDay}/>
          <MeetingHistoryStudent student={student} addPayment={addPayment} payment={payment}/>
        </div>
      ) : null}
    </div>
  );
};

export default MeetingHistoryBox;
