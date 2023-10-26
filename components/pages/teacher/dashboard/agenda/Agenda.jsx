"use client";
import React, { useState, useEffect } from "react";
import AgendaUser from "./AgendaUser";
import axios from "axios";
import AddStudent from "../../AddStudent";
import MeetingPopUp from "../MeetingPopUp";


const Agenda = ({
                    setMeetingHistory,
                    setUserTarget,
                    setUserStudents,
                    userStudents,
                    isLoading,
                    setIsLoading,
                }) => {
    const [addNewStudentMenu, setAddNewStudentMenu] = useState(false);
    const [user, setUser] = useState(null);

    const fetchStudent = async () => {
        try {
            const res = await axios.get("/api/getUserData");
            setUserStudents(res.data.students);
            setUser(res.data);
            setUserTarget(res.data.target);
            setIsLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchStudent();
    }, []);

    return (
        <div className={"flex-column lg:w-4/12 w-full"}>
            <div className={"agenda__title"}>
                <h1 className={"title-h1"}>Harmonogram spotkań</h1>
                <button className={"btn"} onClick={() => setAddNewStudentMenu(true)}>
                    {" "}
                    Dodaj
                </button>
            </div>
            <div className={"agenda"}>
                {isLoading ? (
                    <div className={"agenda__container"}>
                        {[1, 2, 3, 4, 5, 6, 7].map((key) => (
                            <AgendaUser key={key} loading={isLoading} />
                        ))}
                    </div>
                ) : (
                    <div className={"agenda__container"}>
                        {userStudents.map((student) => (
                            <AgendaUser
                                fetchStudent={fetchStudent}
                                student={student}
                                key={student._id}
                            />
                        ))}
                    </div>
                )}
                {
                    //add new student
                    addNewStudentMenu && (
                        <div className={"addStudent"}>
                            <AddStudent
                                fetchStudent={fetchStudent}
                                apiUrl={"/api/add-student"}
                                closeMenu={setAddNewStudentMenu}
                            />
                        </div>
                    )
                }
                <MeetingPopUp user={user} setMeetingHistory={setMeetingHistory} />
            </div>
        </div>
    );
};

export default Agenda;