import React from 'react'
import StudentsBox from "./StudentsBox";
import StudentsBoxLoading from "./StudentsBoxLoading";

const StudentsContainer = ({loading, renderedStudents, fetchStudent}) => {
    return (
        <div className={" overflow-y-auto h-[50vh] "}>
            {   loading ?
                [1,2,3,4,5,].map(key => (
                    <StudentsBoxLoading key={key} />
                ))
                :renderedStudents.map((student, index) => (
                    <StudentsBox key={index} loading={loading} student={student} fetchStudent={fetchStudent}/>
                ))
            }
        </div>
    )
}
export default StudentsContainer
