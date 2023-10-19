"use client"
import React, {useEffect, useState} from "react";
import axios from "axios";
import {loadingUser} from "../../../constants/loadingUser";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {AccountCircle} from "@mui/icons-material";
import FaceIcon from '@mui/icons-material/Face';
import StudentsBox from "../../../components/StudentsBox";
import TuneIcon from '@mui/icons-material/Tune';
import DeleteIcon from '@mui/icons-material/Delete';
import AddStudent from "../../../components/AddStudent";

const Page = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")
    const [addNewStudentMenu, setAddNewStudentMenu] = useState(false)

    const fetchStudent = async () => {
        try {
            const res = await axios.get("/api/getUserData");
            setStudents(res.data.students);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };
    const searchEngine = () => {
        if (search) { // Check if search is not empty
            const filteredStudents = students.filter((student) =>
                student.name && student.name.toLowerCase().includes(search)
            );
            setStudents(filteredStudents);
        } else {
            // Reset the student list if the search input is empty
            fetchStudent();
        }
    };


    useEffect(() => {
        fetchStudent();
    }, []);
    useEffect(( ) => {
        searchEngine()
    }, [search])



    return (
        <div className={"flex flex-col items-center w-screen h-[75vh] overflow-hidden"}>
            <div className={"flex gap-6 text-start w-10/12 mb-4"}>
                <h1 className={"title-h1 "}>Uczniowie</h1>
                <button className={"addBtn"} onClick={() => setAddNewStudentMenu(true)}>Dodaj ucznia</button>
            </div>
            <div className={"bg-slate-50 w-full lg:w-10/12 h-fit padding-y px-8 "}>
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
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    variant="standard"
                />
                <div className={"flex-between padding-y border-b-2 font-bold pr-10"}>
                    <p className={"w-10"}>Avatar</p>
                    <p className={"w-16"}>Imię</p>
                    <p className={"w-28"}>Nazwisko</p>
                    <p className={"w-56"}>Email</p>
                    <p className={"w-28"}>Telefon</p>
                    <p className={"w-28"}>Data dodania</p>
                    <p className={"w-28 text-center"}>
                        Akcja
                    </p>
                </div>
                <div className={" overflow-y-auto h-[50vh] "}>
                    {
                        students.map((student, index) => (
                            <StudentsBox key={index} student={student} addNewStudentMenu={addNewStudentMenu} setAddNewStudentMenu={setAddNewStudentMenu} fetchStudent={fetchStudent}/>
                        ))
                    }
                </div>
            </div>

            {
                //adding new student
                addNewStudentMenu && (
                    <div className={"backgroundShadow addStudent"}>
                        <AddStudent
                            fetchStudent={fetchStudent}
                            apiUrl={"/api/add-student"}
                            closeMenu={setAddNewStudentMenu}
                        />
                    </div>
                )
            }

        </div>
    )
}
export default Page
