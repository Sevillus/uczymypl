"use client"
import {useEffect, useState} from "react";
import axios from "axios";
import {loadingUser} from "../../../constants/loadingUser";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {AccountCircle} from "@mui/icons-material";
import FaceIcon from '@mui/icons-material/Face';
import StudentsBox from "../../../components/StudentsBox";
import TuneIcon from '@mui/icons-material/Tune';
import DeleteIcon from '@mui/icons-material/Delete';

const Page = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")

    const fetchStudent = async () => {
        try {
            const res = await axios.get("/api/getUserData");
            setStudents(res.data.students);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchStudent();
    }, []);

    console.log(search)


    return (
        <div className={"flex flex-col items-center w-screen h-[75vh] overflow-y-auto"}>
            <div className={"flex gap-6 text-start w-10/12 mb-4"}>
                <h1 className={"title-h1 "}>Uczniowie</h1>
                <button className={"addBtn"}>Dodaj ucznia</button>
            </div>

            <div className={"bg-slate-50 w-full lg:w-10/12 h-10/12 padding-y px-8"}>
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
                    onChange={(e) => setSearch(e.target.value)}
                    variant="standard"
                />
                <div className={"flex-between padding-y border-b-2 font-bold pr-10"}>
                    <p className={"w-10"}>Avatar</p>
                    <p className={"w-16"}>Imię</p>
                    <p className={"w-28"}>Nazwisko</p>
                    <p className={"w-56"}>Email</p>
                    <p className={"w-28"}>Telefon</p>
                    <p className={"w-28"}>Data dodania</p>
                    <p className={"w-28"}>
                        Akcja
                    </p>
                </div>
                {
                    students.map((student, key) => (
                        <StudentsBox key={key} student={student}/>
                    ))
                }
            </div>

        </div>
    )
}
export default Page
