import React from 'react'
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";

const MeetingHistoryStudent = ({student, payment, addPayment}) => {
    return (
        <div className="flex-between px-4">
            <p>{student.name}</p>
            <div className="flex gap-4">
                <p className={payment ? "text-green-600" : "text-rose-600"}>
                    {student.price},00zł
                </p>
                {payment ? (
                    <ClearIcon className="w-4" onClick={() => addPayment(student)} />
                ) : (
                    <DoneIcon className="w-4" onClick={() => addPayment(student)} />
                )}
            </div>
        </div>
    )
}
export default MeetingHistoryStudent
