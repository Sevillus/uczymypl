import { useState, useEffect } from "react";
import dayjs from "dayjs";

const useChart = (meetingHistory) => {
    const today = dayjs();
    const lastDayOfMonth = today.date();

    const [earningsByDay, setEarningsByDay] = useState([]);

    useEffect(() => {
        const calculateEarningsByDay = () => {
            const newEarningsByDay = [];
            let totalEarnings = 0;
            for (let i = 1; i <= lastDayOfMonth; i++) {
                const date = today.date(i);
                let earnings = 0;
                meetingHistory.forEach((student) => {
                    if (
                        dayjs(student.nextMeeting).format("D.M") === date.format("D.M") &&
                        student.isPaid
                    ) {
                        earnings += student.price;
                    }
                });
                totalEarnings += earnings;
                newEarningsByDay.push(totalEarnings);
            }
            setEarningsByDay(newEarningsByDay);
        };
        calculateEarningsByDay();
    }, [meetingHistory]);

    return earningsByDay;
};

export default useChart;