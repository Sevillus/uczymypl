import React from 'react'
import convertDate from "../../../../../utils/convertDate";

const MeetingHistoryDate = ({ isSameDay, student }) => {
    return (
        <div>
            {isSameDay && (
                <div className="border-b-2">
                    <p className="font-medium">
                        {convertDate(student.nextMeeting).dayConverted}
                    </p>
                </div>
            )}
        </div>
    )
}

export default MeetingHistoryDate
