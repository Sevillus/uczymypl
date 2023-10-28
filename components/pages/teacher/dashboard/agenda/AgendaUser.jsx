"use client";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddStudent from "../AddStudent";
import convertDate from "../../../../../utils/convertDate";

const AgendaUser = ({ student, fetchStudent }) => {
  const [isActive, setIsActive] = useState(false);

  const handleSettingsClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={"flex-between w-full p-4  shadow-md rounded-lg"}>
        
      <div>
        <h2 className={"title-h2"}>{student.name}</h2>
        <div>
          <span className={"span"}>
            {convertDate(student.nextMeeting).dayConverted} o {student.time}
          </span>
          <span className={"span lg:hidden"}> - {student.duration}</span>
        </div>
      </div>

      <div className={"flex-between lg:w-4/12"}>
        {/*displaying only on large devices*/}
        <div className={"flex flex-col hidden lg:flex"}>
          <h2 className={"title-h2"}>{student.day}</h2>
          <span className={"span"}>
            {student.time} - {student.duration}{" "}
          </span>
        </div>
        <button>
          <MoreHorizIcon onClick={handleSettingsClick} />
        </button>
      </div>

      {isActive && (
        <AddStudent
          fetchStudent={fetchStudent}
          studentId={student._id}
          student={student}
          apiUrl={"/api/change-student"}
          closeMenu={setIsActive}
        />
      )}
    </div>
  );
};

export default AgendaUser;
