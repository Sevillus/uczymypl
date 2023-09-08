
import React from 'react'
import Agenda from "../../components/Agenda";
import ProgressBar from "../../components/ProgressBar";


const Page = () => {

    return (
        <div className={"flex-between"}>
           <Agenda />
            <ProgressBar />
        </div>
    )
}
export default Page
