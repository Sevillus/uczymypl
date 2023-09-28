"use client";
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";

const MeetingHistoryInfo = ({
  student,
  meetingHistory,
  setEarnedThisMonth,
  paymentInfo,
  setPaymentInfo,
    filtr
}) => {

  const [payment, setPayment] = useState(student.isPaid);





  useEffect(() => {
    let counter = 0;
    const unPaid = meetingHistory.filter(student => student.isPaid === false)
    setPaymentInfo(unPaid)
    filtr? meetingHistory.forEach(student => student.isPaid = false) :""
    meetingHistory.forEach((student) => {
      if(student.isPaid) {
        counter = counter + student.price
      }
    });

    setEarnedThisMonth(counter);
  }, [meetingHistory, setEarnedThisMonth]);

  const addPayment = async (student, isPaid) => {
    setPayment((prev) => !prev);

    let updatedEarned = 0;
    if (!payment) {
      const studentIndex = paymentInfo.findIndex(student => student._id == student._id)
      setPaymentInfo(prev => prev.length === 1 ? [] : prev.slice(studentIndex - 1));
      setEarnedThisMonth(prev => prev + student.price)
    } else {
      setPaymentInfo(prev => [...prev, student])
      setEarnedThisMonth(prev => prev - student.price)
    }

    await fetch(`api/meeting-history`, {
      method: "POST",
      body: JSON.stringify({
        isPaid: isPaid,
        id: student._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div className={"flex-between px-4"}>
      <p>{student.name}</p>
      <div className={"flex gap-4"}>
        <p className={payment ? "text-green-600" : "text-rose-600"}>
          {student.price},00zł
        </p>
        {payment ? (
          <ClearIcon
            className={"w-4"}
            onClick={() => addPayment(student, false)}
          />
        ) : (
          <DoneIcon
            className={"w-4"}
            onClick={() => addPayment(student, true)}
          />
        )}
      </div>
    </div>
  );
};
export default MeetingHistoryInfo;
