import React from 'react'

const ScheduleBox = ({ day, isLoading}) => {
    return (
        <div className="p-2 flex-column gap-4 h-96 overflow-y-auto">
            {day.studentsThisDay.map((student, studentIndex) => (
                <div key={studentIndex} className="flex-column items-center">
                    {isLoading ? (
                        <div className="flex flex-col w-full shadow-lg p-2 rounded-lg bg-blue-100 gap-2">
                            <div className={"bg-slate-300 w-32 h-6 rounded-md"} />
                            <div className={"bg-slate-300 w-24 h-4 rounded-md"} />
                        </div>
                    ) : (
                        <div className="flex flex-col w-full shadow-lg p-2 rounded-lg bg-blue-100">
                            <h2 className="title-h2">
                                {student.time} - {student.duration}
                            </h2>
                            <p>{student.name}</p>
                        </div>
                    )}
                    <div className="w-10/12 h-2 border-b mt-2" />
                </div>
            ))}
        </div>
    )
}
export default ScheduleBox
