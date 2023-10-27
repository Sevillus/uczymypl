import React from 'react'
import AgendaUser from "./AgendaUser";

const AgendaContainer = ({userStudents, fetchData}) => {
    return (
        <div className={"flex-column h-full gap-4 p-4 overflow-y-scroll rounded-lg"}>
            {userStudents.map((student) => (
                <AgendaUser
                    fetchStudent={fetchData}
                    student={student}
                    key={student._id}
                />
            ))}
        </div>
    )
}
export default AgendaContainer
