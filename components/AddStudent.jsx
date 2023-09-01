"use client"
import CloseIcon from '@mui/icons-material/Close';


import {TextField} from "@mui/material";
import AddStudentSelect from "./AddStudent__select";
import {useState} from "react";


const AddStudent = () => {
    const school = ["Podstawowa",'Liceum',"Technikum","Zawodowa" ]
    const days = ["Poniedziałek","Wtorek", "Środa","Czwartek","Piątek"]

    const [name, setName] = useState("")
    const [userSchool, setUserSchool] = useState("")
    const [day, setDay] = useState("")
    const [userTime, setUserTime] = useState("")

    const makeApiCall = async (e) => {
        e.preventDefault();

        await fetch("/api/add-student", {
            method: "POST",
            body: JSON.stringify({ name: name, school: userSchool, day: day, time: userTime }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };



    return (
        <div className={"py-6 padding-x border-2 w-2/6 h-5/6 bg-white z-10 drop-shadow-xl flex flex-col gap-4" }>
            <div className={"flex-between"}>
                <h1 className={"text-lg font-semibold"}>Dodaj ucznia</h1>
                <button>
                    <CloseIcon className={"closeBtn"}/>
                </button>
            </div>
            <form onSubmit={makeApiCall} className={"flex flex-col gap-10"}>
                <TextField value={name} onChange={(e) => setName(e.target.value)} id="standard-basic" label="Imię i nazwisko" variant="standard" />
                <AddStudentSelect title="Rodzaj szkoły" array={school} onChange={(value) => setUserSchool(value)} />
                <AddStudentSelect title="Dzień zajęć" array={days} onChange={(value) => setDay(value)} />
                <TextField id="standard-basic" label="Godzina zajęć" value={userTime} onChange={(e) => setUserTime(e.target.value)} type="time" variant="standard" />
                <button type="submit">Dodaj</button>
            </form>
        </div>
    )
}
export default AddStudent
