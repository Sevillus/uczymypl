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
import StudentsPageMobileInfo from "../../../components/StudentsPageMoreInfo";
import StudentsPageMoreInfo from "../../../components/StudentsPageMoreInfo";
import dayjs from "dayjs";

const Page = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("")
    const [addNewStudentMenu, setAddNewStudentMenu] = useState(false)
    // rendered students depend on search bar value and students array, students are fetched
    const [renderedStudents, setRenderedStudents] = useState([])
    const [showMoreStudentInfo, setShowMoreStudentInfo] = useState(false)

    const fetchStudent = async () => {
        try {
            const res = await axios.get("/api/getUserData");
            setStudents(res.data.students);
            setRenderedStudents(res.data.students)
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
            setRenderedStudents(filteredStudents)
        } else {
            setRenderedStudents(students)
        }
    };


    useEffect(() => {
        fetchStudent();
    }, []);
    useEffect(( ) => {
        searchEngine()
    }, [search])



    return (
        <div className={"flex flex-col items-center w-full h-screen lg:h-[75vh] lg:overflow-hidden"}>
            <div className={"flex gap-6 text-start w-10/12 mb-4 mt-4"}>
                <h1 className={"title-h1 "}>Uczniowie</h1>
                <button className={"addBtn"} onClick={() => setAddNewStudentMenu(true)}>Dodaj ucznia</button>
            </div>
            <div className={" bg-slate-50 w-full lg:w-10/12 h-fit padding-y px-8 "}>
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
                <div className={"flex-between padding-y border-b-2 font-bold pr-10 text-center"}>
                    <p className={"lg:w-10 hidden lg:block"}>Avatar</p>
                    <p className={"lg:w-16"}>Imię</p>
                    <p className={"lg:w-28"}>Nazwisko</p>
                    <p className={"w-56 hidden lg:block"}>Email</p>
                    <p className={"w-28 hidden lg:block"}>Telefon</p>
                    <p className={"w-28 hidden lg:block"}>Data dodania</p>
                    <p className={"lg:w-28 "}> Opcje</p>
                </div>
                <div className={" overflow-y-auto h-[50vh] "}>
                    {   loading ?
                        [1,2,3,4,5,].map(key => (
                            <StudentsBox key={key} loading={loading} />
                        ))
                         :renderedStudents.map((student, index) => (
                            <StudentsBox key={index} loading={loading} student={student} fetchStudent={fetchStudent}/>
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

