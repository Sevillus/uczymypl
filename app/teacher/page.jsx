"use client"
import Agenda from "../../components/Agenda/Agenda";
import ProgressBar from "../../components/ProgressBar";
import MeetingPopUp from "../../components/MeetingPopUp";
import {useSession} from "next-auth/react";


const Page = () => {


    return (
        <div className={"flex-between"}>
            <Agenda />
            <ProgressBar />
        </div>
    )
}
export default Page
