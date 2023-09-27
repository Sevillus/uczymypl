"use client"
import React, {useEffect, useState} from 'react'
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";

const MeetingHistoryInfo = ({student,meetingHistory, setEarnedThisMonth}) => {
    const [payment, setPayment] = useState(student.isPaid)



    const [earned, setEarned] = useState(0);

    useEffect(() => {
        let counter = 0;
        meetingHistory.forEach(student => {
            student.isPaid ? counter = counter + student.price:"";
        });
        setEarned(counter);
        setEarnedThisMonth(counter);
    }, [meetingHistory, setEarnedThisMonth]);

    const addPayment = async (student, isPaid) => {
        setPayment((prev) => !prev);
        let updatedEarned = 0
        if (!payment) {
            updatedEarned = earned + student.price;
        } else {
            updatedEarned = earned - student.price;
        }
        setEarned(updatedEarned);
        setEarnedThisMonth(updatedEarned);
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
                        className={"w-4"} onClick={() => addPayment(student,  false)}
                    />
                ) : (
                    <DoneIcon className={"w-4"} onClick={() => addPayment(student, true)} />
                )}
            </div>
        </div>
    )
}
export default MeetingHistoryInfo
