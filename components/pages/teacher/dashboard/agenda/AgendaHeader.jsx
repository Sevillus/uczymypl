import React from 'react'

const AgendaHeader = ({setAddNewStudentMenu}) => {
    return (
        <div className={"flex-between"}>
            <h1 className={"title-h1"}>Harmonogram spotkań</h1>
            <button className={"btn"} onClick={() => setAddNewStudentMenu(true)}>
                {" "}
                Dodaj
            </button>
        </div>
    )
}
export default AgendaHeader
