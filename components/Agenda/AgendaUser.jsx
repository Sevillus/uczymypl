import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import meetingDay from "../../utils/meetingDay";
import AddStudent from "../AddStudent";
import convertMeetingDate from "../../utils/meetingDay";
import convertDate from "../../utils/convertDate";
import dayjs from "dayjs";

const AgendaUser = (props) => {
  const student = props.student;
  console.log(student);
  const [isActive, setIsActive] = useState(false);

  const handleSettingsClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={"flex-between w-full p-4  shadow-md rounded-lg"}>
      <div>
        <h2 className={"text-xl font-semibold"}>{student.name}</h2>
        <span>{convertDate(student.nextMeeting).dayConverted} o{" "}
            {student.time}</span>
      </div>
        <div className={"flex-between w-4/12"}>
            <div className={"flex flex-col text-lg w-10/12"}>
               <p className={" font-semibold"}>{student.day}</p>
               <p>{student.time} - {student.duration} </p>
            </div>
            <button>
                <MoreHorizIcon onClick={handleSettingsClick} />
            </button>
        </div>

      {isActive && (
        <div className={"absolute w-full h-full  op top-0 z-10 flex-center"}>
          <AddStudent
            fetchStudent={props.fetchStudent}
            studentId={student._id}
            student={student}
            apiUrl={"/api/change-student"}
            closeMenu={setIsActive}
          />
        </div>
      )}
    </div>
  );
};

export default AgendaUser;
