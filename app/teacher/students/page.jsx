"use client"
import {useEffect, useState} from "react";
import axios from "axios";
import {loadingUser} from "../../../constants/loadingUser";


const Page = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

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
        <div className={"absolute flex-center top-0 left-0 w-screen h-screen bg-slate-700"}>
            <div className={"bg-slate-100 w-10/12 h-12/12"}>
                {students.map((student, index) => (
                    <div key={index}>
                        {student.name}
                    </div>
                ))}
            </div>

        </div>
    )
}
export default Page
