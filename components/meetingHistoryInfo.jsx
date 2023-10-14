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
  filtr,
  setFiltr,
}) => {
  const [payment, setPayment] = useState(student.isPaid);
// sum earned this month when student have paid
  useEffect(() => {
    let counter = 0;
    const unPaid = meetingHistory.filter((student) => student.isPaid === false);
    setPaymentInfo(unPaid);
    meetingHistory.forEach((student) => {
      if (student.isPaid) {
        counter = counter + student.price;
      }
    });
    setEarnedThisMonth(counter);
  }, [meetingHistory, setEarnedThisMonth]);
//Adding new payment, depends on student isPaid state
  const addPayment = async (student, isPaid) => {
    setPayment((prev) => !prev);

    if (!payment) {
      const studentIndex = paymentInfo.findIndex(
        (student) => student._id == student._id,
      );
      setPaymentInfo((prev) =>
        prev.length === 1 ? [] : prev.slice(studentIndex - 1),
      );
      setEarnedThisMonth((prev) => prev + student.price);
    } else {
      setPaymentInfo((prev) => [...prev, student]);
      setEarnedThisMonth((prev) => prev - student.price);
    }
    if (paymentInfo.length === 1) {
      setFiltr(false);
      console.log("elo");
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

  return !filtr ? (
    <div className={"flex-between px-4 "}>
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
  ) : !payment ? (
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
  ) : (
    ""
  );
};
export default MeetingHistoryInfo;
