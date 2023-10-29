import React from 'react'
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TuneIcon from "@mui/icons-material/Tune";
import StudentsBoxIcon from "./StudentsBoxIcon";

const StudentsBoxLoading = () => {

    return (
        <div className={"flex-between padding-y border-b-2  lg:pr-10 "}>
            <StudentsBoxIcon />
            <p className={"loading-slate-200 w-16 "}></p>
            <p className={"loading-slate-200 w-28"}></p>
            <p className={"loading-slate-200 w-56 lg:flex  hidden"}></p>
            <p className={"loading-slate-200 w-28 lg:flex  hidden"}></p>
            <p className={"loading-slate-200 w-28 lg:flex  hidden"}></p>
            <p className={"flex-center gap-2  w-28"}>
                <InfoOutlinedIcon className={"text-blue-500"} />
                <TuneIcon />
            </p>
        </div>
    )
}
export default StudentsBoxLoading
