import React from 'react'

const StudentsHeader = ({setAddNewStudentMenu}) => {
    return (
        <div className={"flex gap-6 text-start w-10/12 mb-4 mt-4"}>
            <h1 className={"title-h1 "}>Uczniowie</h1>
            <button className={"addBtn"} onClick={() => setAddNewStudentMenu(true)}>Dodaj ucznia</button>
        </div>
    )
}
export default StudentsHeader
