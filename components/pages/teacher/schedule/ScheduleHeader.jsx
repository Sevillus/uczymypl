import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ScheduleHeader = ({day, currentDay, setCurrentDay}) => {
    const moveForward = () => {
        currentDay === 6 ? setCurrentDay(0) : setCurrentDay((prev) => prev + 1);
    };
    const moveBack = () => {
        currentDay === 0 ? setCurrentDay(6) : setCurrentDay((prev) => prev - 1);
    };
    return (
        <div className="schedule__header">
            <ArrowBackIcon onClick={moveBack} />
            <h1>{day.dayName}</h1>
            <ArrowForwardIcon onClick={moveForward} />
        </div>
    )
}
export default ScheduleHeader
