"use client"
import {useEffect, useState} from "react";
import axios from "axios";
import {loadingUser} from "../../../constants/loadingUser";
import {InputAdornment, TextField} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {AccountCircle} from "@mui/icons-material";
import FaceIcon from '@mui/icons-material/Face';

const Page = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const colors = ["#a2513f", "#2a6735", "#5733FF", "#388383", ];
    function getRandomColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

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

    return (
        <div className={"flex flex-col items-center w-screen h-full"}>
            <div className={"flex gap-6 text-start w-8/12 mb-4"}>
                <h1 className={"title-h1 "}>Uczniowie</h1>
                <button className={"addBtn"}>Dodaj ucznia</button>
            </div>

            <div className={"bg-slate-50 w-full lg:w-8/12 h-10/12 padding-y px-8"}>
                <TextField
                    id="input-with-icon-textfield"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                />
                <div className={"flex-between padding-y border-b-2 font-bold pr-10"}>
                    <p>Avatar</p>
                    <p>Imię</p>
                    <p>Nazwisko</p>
                    <p>Email</p>
                    <p>Telefon</p>
                    <p>Data dodania</p>
                    <p>Akcja</p>
                </div>
                <div className={"flex-between padding-y border-b-2  pr-10"}>
                    <div className={"w-[36px] h-[36px] rounded-full bg-blue-500 text-white flex-center"} style={{background:getRandomColor()}}>M</div>
                    <p>Rafał</p>
                    <p>Czarnecki</p>
                    <p>ravczarencki00@gmail.com</p>
                    <p>725 515 070</p>
                    <p>14.10.2023</p>
                    <p>Dodaj</p>
                </div>
                <div className={"flex-between padding-y border-b-2  pr-10"}>
                    <div className={"w-[36px] h-[36px] rounded-full bg-blue-500 text-white flex-center"} style={{background:getRandomColor()}}>M</div>
                    <p>Rafał</p>
                    <p>Czarnecki</p>
                    <p>ravczarencki00@gmail.com</p>
                    <p>725 515 070</p>
                    <p>14.10.2023</p>
                    <p>Dodaj</p>
                </div>
                <div className={"flex-between padding-y border-b-2  pr-10"}>
                    <div className={"w-[36px] h-[36px] rounded-full bg-blue-500 text-white flex-center"} style={{background:getRandomColor()}}>M</div>
                    <p>Rafał</p>
                    <p>Czarnecki</p>
                    <p>ravczarencki00@gmail.com</p>
                    <p>725 515 070</p>
                    <p>14.10.2023</p>
                    <p>Dodaj</p>
                </div>
                <div className={"flex-between padding-y border-b-2  pr-10"}>
                    <div className={"w-[36px] h-[36px] rounded-full bg-blue-500 text-white flex-center"} style={{background:getRandomColor()}}>M</div>
                    <p>Rafał</p>
                    <p>Czarnecki</p>
                    <p>ravczarencki00@gmail.com</p>
                    <p>725 515 070</p>
                    <p>14.10.2023</p>
                    <p>Dodaj</p>
                </div>
                <div className={"flex-between padding-y border-b-2  pr-10"}>
                    <div className={"w-[36px] h-[36px] rounded-full bg-blue-500 text-white flex-center"} style={{background:getRandomColor()}}>M</div>
                    <p>Rafał</p>
                    <p>Czarnecki</p>
                    <p>ravczarencki00@gmail.com</p>
                    <p>725 515 070</p>
                    <p>14.10.2023</p>
                    <p>Dodaj</p>
                </div>
                {/*{students.map((student, index) => (*/}
                {/*    <div key={index}>*/}
                {/*        {student.name}*/}
                {/*    </div>*/}
                {/*))}*/}
            </div>

        </div>
    )
}
export default Page
