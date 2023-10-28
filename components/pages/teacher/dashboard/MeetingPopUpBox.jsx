import React from 'react'
import dayjs from "dayjs";
import ClearIcon from "@mui/icons-material/Clear";
import DoneIcon from "@mui/icons-material/Done";

const MeetingPopUpBox = ({student, confirmHandler}) => {
    return (
        <div  className={"flex-between w-full border-b-2 py-2"}>
            <div>
                <p className={"font-semibold "}>{student.name}</p>
                <p className={"text-slate-400"}>
                    {student.day} {dayjs(student.nextMeeting).format("D.MM")} o {student.time}
                </p>
            </div>
            <div className={"w-2/12 flex-between"}>
                <button>
                    <ClearIcon onClick={() => confirmHandler(student, false)} className={"text-rose-600"} />
                </button>
                <button onClick={() => confirmHandler(student, true)}>
                    <DoneIcon className={"text-green-600"} />
                </button>
            </div>
        </div>
    )
}
export default MeetingPopUpBox
