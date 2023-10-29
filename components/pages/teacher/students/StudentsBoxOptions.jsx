import React from 'react'
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TuneIcon from "@mui/icons-material/Tune";

const StudentsBoxOptions = ({setShowMoreStudentInfo, setIsActive}) => {
    return (
        <p className={"flex-center gap-2  w-28"}>
            <button onClick={() => setShowMoreStudentInfo(true)}>
                <InfoOutlinedIcon className={"text-blue-500"} />
            </button>
            <button onClick={() => setIsActive(true)}>
                <TuneIcon />
            </button>
        </p>
    )
}
export default StudentsBoxOptions
