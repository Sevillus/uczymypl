import { useEffect, useState } from "react";

export const useMeetingHistory = (
  student,
  meetingHistory,
  setEarnedThisMonth,
  paymentInfo,
  setPaymentInfo,
  filtr,
  setFiltr,
) => {
  const [payment, setPayment] = useState(student.isPaid);
  useEffect(() => {

    const unPaidMeetings = meetingHistory.filter((meeting) => !meeting.isPaid);
    setPaymentInfo(unPaidMeetings);

    const earnedThisMonth = meetingHistory.reduce((total, meeting) => {
      if (meeting.isPaid) {
        total += meeting.price;
      }
      return total;
    }, 0);

    setEarnedThisMonth(earnedThisMonth);
  }, [meetingHistory, setEarnedThisMonth, setPaymentInfo]);

  const addPayment = async (meeting) => {
    setPayment(!payment);
    console.log(student)

    if (!payment) {
      const studentIndex = paymentInfo.findIndex(
        (paymentMeeting) => paymentMeeting._id === meeting._id,
      );
      setPaymentInfo((prev) =>
        prev.length === 1 ? [] : prev.slice(studentIndex, 1),
      );
      setEarnedThisMonth((prev) => prev + meeting.price);
    } else {
      setPaymentInfo((prev) => [...prev, meeting]);
      setEarnedThisMonth((prev) => prev - meeting.price);
    }

    if (paymentInfo.length === 1) {
      setFiltr(false);
    }
  try{
    await fetch(`api/meeting-history`, {
      method: "POST",
      body: JSON.stringify({
        isPaid: !payment,
        id: meeting._id,
        nextMeeting: meeting.nextMeeting
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }catch (e) {
    console.log(e)
  }

  };

  return {
    payment,
    addPayment,
  };
};
