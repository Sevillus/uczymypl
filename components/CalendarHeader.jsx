"use client"
import React, {useState} from 'react'
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import dayjs from "dayjs";
import {months} from "../constants/months";

const CalendarHeader = ( props ) => {
    const {today, setToday} = props


    return (
        <div className={"w-full h-10  border-b-[2px] rounded-t-lg bg-blue-500 text-white flex-between padding-y padding-x"}>
            <div className={"flex-between gap-2"}>
                <button>
                    <KeyboardArrowLeftIcon onClick={ () => today > 0 ? setToday(today - 1) : setToday(11)}/>
                </button>
                <p>{months[today]} </p>
                <button>
                    <KeyboardArrowRightIcon onClick={ () => today < 11 ? setToday(today + 1) : setToday(0)}/>
                </button>
            </div>

        </div>
    )
}
export default CalendarHeader
