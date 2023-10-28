"use client"
import AddStudent from "../../../components/pages/teacher/dashboard/AddStudent";
import useStudentsPage from "../../../hooks/useStudents";
import StudentsHeader from "../../../components/pages/teacher/students/StudentsHeader";
import StudentsSearchBar from "../../../components/pages/teacher/students/StudentsSearchBar";
import StudentsColumnsNames from "../../../components/pages/teacher/students/StudentsColumnsNames";
import StudentsContainer from "../../../components/pages/teacher/students/StudentsContainer";

const Students = () => {
    const {
        loading,
        search,
        setSearch,
        addNewStudentMenu,
        setAddNewStudentMenu,
        renderedStudents,
        fetchStudent
    } = useStudentsPage();


    return (
        <div className={"flex flex-col items-center w-full h-screen lg:h-[75vh] lg:overflow-hidden"}>
            <StudentsHeader setAddNewStudentMenu={setAddNewStudentMenu}/>
            <div className={" bg-slate-50 w-full lg:w-10/12 h-fit padding-y px-8 "}>
                <StudentsSearchBar search={search} setSearch={setSearch} />
                <StudentsColumnsNames />
                <StudentsContainer loading={loading} fetchStudent={fetchStudent} renderedStudents={renderedStudents}/>
            </div>
            {
                addNewStudentMenu && (
                        <AddStudent
                            fetchStudent={fetchStudent}
                            apiUrl={"/api/add-student"}
                            closeMenu={setAddNewStudentMenu}
                        />
                )
            }
        </div>
    )
}
export default Students

