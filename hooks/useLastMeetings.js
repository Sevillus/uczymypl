import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import dayjs from "dayjs";

const useLastMeetings = (user, setMeetingHistory) => {
    const { data: session } = useSession();
    const [lastMeetings, setLastMeetings] = useState([]);


    useEffect(() => {
        if (user && user.meetingHistory) {
            const currentMonthLastMeetings =
                user.meetingHistory[dayjs().month()].lastMeetings;
            setLastMeetings(currentMonthLastMeetings);
            setMeetingHistory(user.meetingHistory[dayjs().month()].allMeetings);
        }
    }, [user]);

    return { session, lastMeetings, setLastMeetings };
};

export default useLastMeetings;