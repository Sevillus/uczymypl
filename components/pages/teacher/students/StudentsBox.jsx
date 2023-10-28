"use client";
import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AddStudent from "../dashboard/AddStudent";
import dayjs from "dayjs";
import StudentsPageMoreInfo from "./StudentsPageMoreInfo";

const StudentsBox = ({ student, fetchStudent, loading }) => {
  const colors = ["#a2513f", "#2a6735", "#5733FF", "#388383"];
  const [isActive, setIsActive] = useState(false);
  const [showMoreStudentInfo, setShowMoreStudentInfo] = useState(false);

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  return (
    <div className={"flex-between padding-y border-b-2  lg:pr-10"}>
      <div
        className={"w-[36px] h-[36px] rounded-full bg-blue-500 text-white lg:flex justify-center items-center hidden"}
        style={{ background: getRandomColor() }}
      >
        {student.name[0]}
      </div>
      <p className={"w-16 text-start"}>{student.name.split(" ")[0]}</p>
      <p className={"w-28 text-start"}>{student.name.split(" ")[1] ? student.name.split(" ")[1] : " - "}</p>
      <p className={"w-56 text-start lg:flex  hidden truncate "}>{student.email ? student.email : " - "}</p>
      <p className={"w-28 text-start lg:flex  hidden"}>{student.phone ? student.phone : " - "}</p>
      <p className={"w-28 text-start lg:flex hidden "}>
        {student.joinDate
          ? dayjs(student.joinDate).format("DD.MM.YYYY")
          : " - "}
      </p>
      <p className={"flex-center gap-2  w-28"}>
        <button onClick={() => setShowMoreStudentInfo(true)}>
          <InfoOutlinedIcon className={"text-blue-500"} />
        </button>
        <button onClick={() => setIsActive(true)}>
          <TuneIcon />
        </button>
      </p>
      {isActive && (
        <div className={"backgroundShadow addStudent"}>
          <AddStudent
            fetchStudent={fetchStudent}
            studentId={student._id}
            student={student}
            apiUrl={"/api/change-student"}
            closeMenu={setIsActive}
          />
        </div>
      )}
      <StudentsPageMoreInfo
        student={student}
        showMoreStudentInfo={showMoreStudentInfo}
        setShowMoreStudentInfo={setShowMoreStudentInfo}
      />
    </div>
  );
};
export default StudentsBox;
