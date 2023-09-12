import React, { useState } from 'react';
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import meetingDay from "../../utils/meetingDay";
import AddStudent from "../AddStudent";
import convertMeetingDate from "../../utils/meetingDay";
import convertDate from "../../utils/convertDate";



const AgendaUser = (props) => {
    const student = props.student;
    const [isActive, setIsActive] = useState(false);



    const handleSettingsClick = () => {
        setIsActive(!isActive);
    };



    return (
        <div>
            <div className={"padding-x padding-y  flex-between gap-20 border-b-2"}>
                <div >
                    <h2 className={"text-md font-semibold"}>{student.name}</h2>
                    <div className={"flex gap-2"}>
                        <CalendarMonthIcon />
                        <span>{convertDate(student.nextMeeting).dayConverted} o {convertDate(student.nextMeeting).hourConverted} </span>
                    </div>
                </div>
                <button>
                    <MoreHorizIcon onClick={handleSettingsClick} />
                </button>
            </div>
            {isActive && (
                <div className={"absolute w-full h-full  op top-0 z-10 flex-center"}>
                    <AddStudent fetchStudent={props.fetchStudent} studentId={student._id} student={student} apiUrl={"/api/change-student"} closeMenu={setIsActive}/>
                </div>
            )}
        </div>
    );
};

export default AgendaUser;
