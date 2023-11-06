"use client";
import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddStudent from "../dashboard/AddStudent";
import dayjs from "dayjs";
import StudentsMoreInfo from "./StudentsMoreInfo";
import StudentsBoxOptions from "./StudentsBoxOptions";
import StudentsBoxStudentInfo from "./StudentsBoxStudentInfo";
import StudentsBoxIcon from "./StudentsBoxIcon";

const StudentsBox = ({ student, fetchStudent, loading }) => {
  const [isActive, setIsActive] = useState(false);
  const [showMoreStudentInfo, setShowMoreStudentInfo] = useState(false);


  return (
    <div className={"flex-between padding-y border-b-2   lg:pr-10"}>
      <StudentsBoxIcon student={student}/>
      <StudentsBoxStudentInfo student={student}/>
      <StudentsBoxOptions
          setShowMoreStudentInfo={setShowMoreStudentInfo}
          setIsActive={setIsActive}
      />
      {isActive && (
          <AddStudent
            fetchStudent={fetchStudent}
            studentId={student._id}
            student={student}
            apiUrl={"/api/change-student"}
            closeMenu={setIsActive}
          />
      )}
      <StudentsMoreInfo
        student={student}
        showMoreStudentInfo={showMoreStudentInfo}
        setShowMoreStudentInfo={setShowMoreStudentInfo}
      />
    </div>
  );
};
export default StudentsBox;
