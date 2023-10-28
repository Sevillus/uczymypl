import { useEffect, useState } from "react";

export function useProgress(earnedThisMonth, userTarget) {
    return earnedThisMonth / userTarget;
}

export function useRotation(isLoading) {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        if (isLoading) {
            const rotationInterval = setInterval(() => {
                setRotation((prevRotation) => prevRotation + 5);
            }, 10);

            return () => clearInterval(rotationInterval);
        }
    }, [isLoading]);

    return rotation;
}