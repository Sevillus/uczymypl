import React from 'react'
import dayjs from "dayjs";

const StudentsBoxStudentInfo = ({student}) => {
    return (
        <div className={"flex w-9/12  flex-between lg:ml-10"}>
            <p className={"w-16 text-start"}>{student.name.split(" ")[0]}</p>
            <p className={"w-28 text-start"}>{student.name.split(" ")[1] ? student.name.split(" ")[1] : " - "}</p>
            <p className={"w-56 text-start lg:flex  hidden truncate "}>{student.email ? student.email : " - "}</p>
            <p className={"w-28 text-start lg:flex  hidden"}>{student.phone ? student.phone : " - "}</p>
            <p className={"w-28 text-start lg:flex hidden "}>
                {student.joinDate ? dayjs(student.joinDate).format("DD.MM.YYYY") : " - "}
            </p>
        </div>
    )
}
export default StudentsBoxStudentInfo

