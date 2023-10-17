"use client"
import React, { useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";
import convertDate from "../utils/convertDate";

const MeetingHistoryInfo = ({
                              student,
                              meetingHistory,
                              setEarnedThisMonth,
                              paymentInfo,
                              setPaymentInfo,
                              filtr,
                              setFiltr,
                              isSameDay,
                            }) => {
  const [payment, setPayment] = useState(student.isPaid);

  useEffect(() => {
    setPayment(student.isPaid);
    let counter = 0;
    const unPaid = meetingHistory.filter((meeting) => !meeting.isPaid);
    setPaymentInfo(unPaid);

    meetingHistory.forEach((meeting) => {
      if (meeting.isPaid) {
        counter += meeting.price;
      }
    });
    setEarnedThisMonth(counter);
  }, [meetingHistory, setEarnedThisMonth]);

  const addPayment = async (meeting, isPaid) => {
    setPayment((prev) => !prev);

    if (!payment) {
      const studentIndex = paymentInfo.findIndex(
          (paymentMeeting) => paymentMeeting._id === meeting._id
      );
      setPaymentInfo((prev) =>
          prev.length === 1 ? [] : prev.slice(studentIndex, 1)
      );
      setEarnedThisMonth((prev) => prev + meeting.price);
    } else {
      setPaymentInfo((prev) => [...prev, meeting]);
      setEarnedThisMonth((prev) => prev - meeting.price);
    }

    if (paymentInfo.length === 1) {
      setFiltr(false);
      console.log("elo");
    }

    await fetch(`api/meeting-history`, {
      method: "POST",
      body: JSON.stringify({
        isPaid: isPaid,
        id: meeting._id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
      <div>
        {!filtr ? (
            <>
              {isSameDay && (
                  <div className="border-b-2">
                    <p className="font-medium">
                      {convertDate(student.nextMeeting).dayConverted}
                    </p>
                  </div>
              )}
              <div className="flex-between px-4">
                <p>{student.name}</p>
                <div className="flex gap-4">
                  <p className={payment ? "text-green-600" : "text-rose-600"}>
                    {student.price},00zł
                  </p>
                  {payment ? (
                      <ClearIcon
                          className="w-4"
                          onClick={() => addPayment(student, false)}
                      />
                  ) : (
                      <DoneIcon
                          className="w-4"
                          onClick={() => addPayment(student, true)}
                      />
                  )}
                </div>
              </div>
            </>
        ) : !payment ? (
            <div>
              {isSameDay && (
                  <div className="border-b-2">
                    <p className="font-medium">
                      {convertDate(student.nextMeeting).dayConverted}
                    </p>
                  </div>
              )}
              <div className="flex-between px-4">
                <p>{student.name}</p>
                <div className="flex gap-4">
                  <p className={payment ? "text-green-600" : "text-rose-600"}>
                    {student.price},00zł
                  </p>
                  {payment ? (
                      <ClearIcon
                          className="w-4"
                          onClick={() => addPayment(student, false)}
                      />
                  ) : (
                      <DoneIcon
                          className="w-4"
                          onClick={() => addPayment(student, true)}
                      />
                  )}
                </div>
              </div>
            </div>

        ) : null}
      </div>
  );
};

export default MeetingHistoryInfo;
