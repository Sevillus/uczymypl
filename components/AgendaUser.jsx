import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import meetingDay from "../utils/meetingDay";
import AddStudent from "./AddStudent";
import convertMeetingDate from "../utils/meetingDay";
import convertDate from "../utils/convertDate";
import dayjs from "dayjs";

const AgendaUser = (props) => {
  const student = props.student;
  const [isActive, setIsActive] = useState(false);

  const handleSettingsClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={"flex-between w-full p-4  shadow-md rounded-lg"}>
      <div>
        <h2 className={"text-xl font-semibold  "}>{student.name}</h2>
        <div>
          <span className={"text-slate-400"}>
            {convertDate(student.nextMeeting).dayConverted} o {student.time}
          </span>
          <span className={"lg:hidden"}> - {student.duration}</span>
        </div>
      </div>
      <div className={"flex-between lg:w-4/12"}>
        <div className={"flex flex-col text-lg w-10/12  hidden lg:block"}>
          <p className={" font-semibold"}>{student.day}</p>
          <p className={"text-slate-400 text-sm"}>
            {student.time} - {student.duration}{" "}
          </p>
        </div>
        <button>
          <MoreHorizIcon onClick={handleSettingsClick} />
        </button>
      </div>

      {isActive && (
        <div className={"addStudent"}>
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
