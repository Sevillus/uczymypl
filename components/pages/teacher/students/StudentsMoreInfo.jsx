import React from 'react'
import dayjs from "dayjs";

const StudentsMoreInfo = ({ student,showMoreStudentInfo, setShowMoreStudentInfo }) => {


    return (
        showMoreStudentInfo && (
            <div className={"addStudent"}>
                <div className={"w-full h-full flex-center backgroundShadow"}>
                    <div className={"bg-slate-100 w-10/12 lg:w-3/12 h-fit rounded-lg p-4"}>
                        <div className={"flex items-center gap-4 border-b-2 py-2"}>
                            <div
                                className={
                                    "w-[36px] h-[36px] rounded-full bg-blue-500 text-white flex-center w-10"
                                }
                            >
                                {student.name[0]}
                            </div>
                            <p className={"text-xl"}>{student.name}</p>
                        </div>
                        <div className={"w-full h-fit flex-center gap-2 p-2"}>
                            <div className={"w-4/12 font-semibold lg:w-3/12 "}>
                                <p>E-mail :</p>
                                <p>Telefon :</p>
                                <p>Dzień :</p>
                                <p>Godzina :</p>
                                <p>Cena :</p>
                                <p>Dołączono :</p>
                            </div>
                            <div className={" w-5/12   h-fit break-words text-start\""}>
                                <p>{student?.email ? student.email : " - "}</p>
                                <p>{student?.phone ? student.phone : " - "}</p>
                                <p>{student?.day}</p>
                                <p>{student?.time} - {student?.duration}</p>
                                <p>{student?.price}.00 PLN</p>
                                <p>{dayjs(student?.joinDate).format("DD.MM.YYYY")}</p>
                            </div>
                        </div>
                        <div className={"w-full flex-center"}>
                            <button className={"w-1/2 addBtn"} onClick={() => setShowMoreStudentInfo(false)}>
                                Zamknij
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        )
    )
}

export default StudentsMoreInfo;
