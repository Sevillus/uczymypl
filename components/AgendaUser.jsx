"use client";
import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AddStudent from "./AddStudent";
import convertDate from "../utils/convertDate";

// each element rendered in the Agenda, contains information about meeting
const AgendaUser = (props) => {
  const student = props.student;
  const isLoading = props.loading;
  const [isActive, setIsActive] = useState(false);

  // change user info menu
  const handleSettingsClick = () => {
    setIsActive(!isActive);
  };

  return !isLoading ? (
    // rendered element while page is loaded
    <div className={"agendaUser__box"}>
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
        // change user info menu
        <div className={"addStudent backgroundShadow"}>
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
  ) : (
    //rendered element while page is loading
    <div className={"agendaUser__box"}>
      <div>
        <p className={"loading-slate-300 w-48"}></p>
        <p className={"loading-slate-200 w-40"}></p>
      </div>
      <div className={"flex flex-col hidden lg:flex lg:w-4/12"}>
        <div>
          <p className={"loading-slate-300 w-20"}></p>
          <p className={"loading-slate-200 w-28"}></p>
        </div>
      </div>
    </div>
  );
};

export default AgendaUser;
