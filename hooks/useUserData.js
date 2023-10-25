import { useState, useEffect } from 'react';
import axios from 'axios';

function useUserData() {
    const [userData, setUserData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStudent = async () => {
            try {
                const res = await axios.get("/api/getUserData");
                setUserData(res.data);
                setIsLoading(false);
            } catch (e) {
                console.log(e);
                setIsLoading(false);
            }
        };

        fetchStudent();
    }, []);

    return { userData, isLoading };
}

export default useUserData;
