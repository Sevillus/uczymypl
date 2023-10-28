import { useState, useEffect } from "react";
import axios from "axios";
import {loadingUser} from "../constants/loadingUser";

const useUserData = () => {
    const [meetingHistory, setMeetingHistory] = useState([]);
    const [earnedThisMonth, setEarnedThisMonth] = useState(0);
    const [userTarget, setUserTarget] = useState(0);
    const [userStudents, setUserStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(loadingUser);

    const fetchData = async () => {
        try {
            const res = await axios.get("/api/getUserData");
            setUserStudents(res.data.students);
            setUser(res.data);
            setUserTarget(res.data.target);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
            console.log(e);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        meetingHistory,
        earnedThisMonth,
        userTarget,
        userStudents,
        isLoading,
        user,
        setMeetingHistory,
        setEarnedThisMonth,
        fetchData,
    };
};

export default useUserData;