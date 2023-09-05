import Image from "next/image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import meetingDay from "../utils/meetingDay";


const AgendaUser = (props) => {
    const student = props.student;


    const { nextMeetingDateConverted, hourConverted } = meetingDay(student);

    return (
        <div className={"padding-x padding-y flex-center gap-20 border-b-2"}>
            <div>
                <h2 className={"text-md font-semibold"}>{student.name}</h2>
                <div className={"flex gap-2"}>
                    <CalendarMonthIcon />
                    <span>{nextMeetingDateConverted} o {hourConverted}</span>
                </div>
            </div>
            <button>
                <MoreHorizIcon />
            </button>
        </div>
    );
};

export default AgendaUser;
