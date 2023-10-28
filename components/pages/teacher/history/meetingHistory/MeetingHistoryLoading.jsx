import React from 'react'

const MeetingHistoryLoading = () => {
    return (
        <div className="p-2 meetingHistory__container">
            <div className="w-full h-8 border-b-2 ">
                <div className="loading-slate-300 w-32 h-6" />
            </div>
            <div className={"flex-column"}>
                {[1, 2, 3, 4, 5].map((key) => (
                    <div key={key} className={"flex flex-between  w-full px-2 h-12"} >
                        <div className={"loading-slate-200 w-40"} />
                        <div className={"loading-slate-200 w-14"} />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default MeetingHistoryLoading
