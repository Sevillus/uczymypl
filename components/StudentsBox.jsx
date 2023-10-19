"use client"
import React, {useState} from "react";
import TuneIcon from "@mui/icons-material/Tune";
import DeleteIcon from "@mui/icons-material/Delete";
import AddStudent from "./AddStudent";
import dayjs from "dayjs";

const StudentsBox = ({student, setAddNewStudentMenu, fetchStudent, addNewStudentMenu}) => {
  const colors = ["#a2513f", "#2a6735", "#5733FF", "#388383"];
    const [isActive, setIsActive] = useState(false);

  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  return (
    <div className={"flex-between padding-y border-b-2  pr-10"}>
      <div
        className={
          "w-[36px] h-[36px] rounded-full bg-blue-500 text-white flex-center w-10"
        }
        style={{ background: getRandomColor() }}
      >
          {student.name[0]}
      </div>
      <p className={"w-16"}>{student.name.split(" ")[0]}</p>
      <p className={"w-28"}>{student.name.split(" ")[1]}</p>
      <p className={"w-56 flex-center"}>{student.email ? student.email : " - "}</p>
      <p className={"w-28 flex-center"}>{student.phone ? student.phone : " - "}</p>
      <p className={"w-28"}>{student.joinDate ? dayjs(student.joinDate).format("DD.MM.YYYY") : " - "}</p>
      <p className={" text-center w-28"}>
        <button onClick={() => setIsActive(true)}>
          <TuneIcon />
        </button>
      </p>
        {
            isActive && (
                <div className={" addStudent"}>
                    <AddStudent
                        fetchStudent={fetchStudent}
                        studentId={student._id}
                        student={student}
                        apiUrl={"/api/change-student"}
                        closeMenu={setIsActive}
                    />
                </div>
            )
        }
    </div>
  );
};
export default StudentsBox;
