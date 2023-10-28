import React from 'react'
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import TuneIcon from "@mui/icons-material/Tune";

const StudentsBoxLoading = () => {
    const colors = ["#a2513f", "#2a6735", "#5733FF", "#388383"];
    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }
    return (
        <div className={"flex-between padding-y border-b-2  lg:pr-10 "}>
            <div
                className={"w-[36px] h-[36px] rounded-full bg-blue-500 text-white lg:flex justify-center items-center hidden"}
                style={{ background: getRandomColor() }}
            >
            </div>
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
