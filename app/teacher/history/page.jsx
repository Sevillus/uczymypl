"use client"
import React, {useEffect, useState} from 'react'
import MeetingHistoryInfo from "../../../components/meetingHistoryInfo";
import axios from "axios";
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Page = () => {
    const [meetingHistory, setMeetingHistory] = useState([])
    const [search, setSearch] = useState("")


    const fetchStudent = async () => {
        try {
            const res = await axios.get("/api/getUserData");
            setMeetingHistory(res.data.meetingHistory);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchStudent();


    }, []);
    console.log(meetingHistory)
    return (
        <div className={"w-full h-[80vh] flex-center overflow-y-auto "}>
            <div className={"w-full lg:w-10/12 min-h-[80vh] padding-x padding-y bg-slate-50"}>
                <div className={"w-full relative py-4"}>
                    <div className={"w-full "}>
                        <TextField
                            id="input-with-icon-textfield"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            value={search}
                            label={"Wyszukaj po nazwie studenta"}
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                            variant="standard"
                            className={"w-full"}
                        />                    </div>
                    <div className={"absolute right-0 top-4 text-blue-700"}>+ Pokaż filtry</div>
                    <div className={"w-full flex-between mt-6 pr-10 text-slate-400"}>
                        <div className={"flex"}>
                            <p className={"lg:w-48"}>Data</p>
                            <p>Nazwa</p>
                        </div>
                        <div >
                            <p>Kwota</p>
                        </div>
                    </div>
                    <div className={"mt-4"}>
                        <div className={"w-full flex-between border-b-2 py-6 pr-2"}>
                            <div className={"flex "}>
                                <p className={"lg:w-48"}>14.10.2023</p>
                                <p>Rafał Czarnecki</p>
                            </div>
                            <div className={"flex lg:gap-4 items-center"}>
                                <p className={"text-green-700 font-semibold"}>70.00 PLN</p>
                                <ClearIcon className={"text-base"}/>
                            </div>
                        </div>
                        <div className={"w-full flex-between border-b-2 py-6 pr-2"}>
                            <div className={"flex "}>
                                <p className={"lg:w-48"}>14.10.2023</p>
                                <p>Rafał Czarnecki</p>
                            </div>
                            <div className={"flex lg:gap-4 items-center"}>
                                <p className={"text-rose-700 font-semibold"}>70.00 PLN</p>
                                <DoneIcon className={"text-base"}/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Page
