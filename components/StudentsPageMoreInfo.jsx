import React from 'react'
import dayjs from "dayjs";

const StudentsPageMoreInfo = ({ student,showMoreStudentInfo, setShowMoreStudentInfo }) => {


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
                        <div className={"w-full h-fit flex-column  gap-2 p-2"}>
                            <div className={"flex-between "}>
                                <p className={"font-semibold lg:w-1/2 lg:text-end lg:pr-2"}>E-mail :</p>
                                <p className={"w-6/12 max-w-6/12 lg:w-1/2  h-fit break-words text-start"}>{student?.email ? student.email : " - "}</p>
                            </div>
                            <div className={"flex-between "}>
                                <p className={"font-semibold lg:w-1/2 lg:text-end lg:pr-2"}>Telefon :</p>
                                <p className={"w-6/12 lg:w-1/2 text-start"}>{student?.phone ? student.phone : " - "}</p> {/* Change student.email to student.phone */}
                            </div>
                            <div className={"flex-between "}>
                                <p className={"font-semibold lg:w-1/2 lg:text-end lg:pr-2"}>Dzień :</p>
                                <p className={"w-6/12 lg:w-1/2 text-start"}>{student?.day}</p>
                            </div>
                            <div className={"flex-between "}>
                                <p className={"font-semibold lg:w-1/2 lg:text-end lg:pr-2"}>Godzina :</p>
                                <p className={"w-6/12  lg:w-1/2 text-start"}>{student?.time} - {student?.duration}</p>
                            </div>
                            <div className={"flex-between "}>
                                <p className={"font-semibold lg:w-1/2 lg:text-end lg:pr-2"}>Cena :</p>
                                <p className={"w-6/12 lg:w-1/2 text-start"}>{student?.price}.00 PLN</p>
                            </div>
                            <div className={"flex-between "}>
                                <p className={"font-semibold lg:w-1/2 lg:text-end lg:pr-2"}>Dołączono :</p>
                                <p className={"w-6/12 lg:w-1/2 text-start"}>{dayjs(student?.joinDate).format("DD.MM.YYYY")}</p>
                            </div>
                            <div className={"flex-center py-2"}>
                                <button className={"w-1/2 addBtn"} onClick={() => setShowMoreStudentInfo(false)}>
                                    Zamknij
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    )
}

export default StudentsPageMoreInfo;
