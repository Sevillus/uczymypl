import React from 'react'
import CloseIcon from "@mui/icons-material/Close";

const MeetingHistoryFiltr = ({paymentInfo, filtr, filtrHandler}) => {

    return (
        <div>
            {paymentInfo.length ? (
                <div>
                    {!filtr ? (
                        <div
                            className={"meetingHistory__alertBtn text-sm"}
                            onClick={() => filtrHandler(true)}
                        >
                            <p>Brak płatności!</p>
                        </div>
                    ) : (
                        <div
                            className={"flex gap-2  cursor-pointer"}
                            onClick={() => filtrHandler(false)}
                        >
                            <p>Wyłącz filtr</p>
                            <CloseIcon />
                        </div>
                    )}
                </div>
            ) : (
                ""
            )}
        </div>
    )
}
export default MeetingHistoryFiltr
