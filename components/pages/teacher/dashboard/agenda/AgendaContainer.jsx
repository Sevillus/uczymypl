import React from 'react'
import AgendaUser from "./AgendaUser";

const AgendaContainer = ({userStudents, fetchData}) => {
    return (
        <div className={"flex-column h-full gap-4 p-4 overflow-y-scroll rounded-lg"}>

            {userStudents[0]  ? userStudents.map((student) => (
                <AgendaUser
                    fetchStudent={fetchData}
                    student={student}
                    key={student._id}
                />
            )):(
                <div className={"w-full h-full flex-center"}>
                    <em>Dodaj swojego pierwszego ucznia!</em>
                </div>
            ) }
        </div>
    )
}
export default AgendaContainer
