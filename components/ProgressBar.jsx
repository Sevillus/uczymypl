"use client"
import { useState } from 'react';


function ProgressBar() {
    const [p, setP] = useState(60); // Wartość procentowa
    return (
        <div className={"w-96 h-96 flex-center"}>
            <div className={"w-80 h-80  rounded-full flex-center drop-shadow-xl outer"} >
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500px" height="500px" className={"absolute"}>
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#e91e63" />
                            <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                    </defs>
                    <circle
                        cx="250"
                        cy="250"
                        r="144"
                        strokeLinecap="round"
                        strokeDashoffset={"250"}
                    />
                </svg>
                <div className={"w-64 h-64 rounded-full absolute inner"}/>
                <div className={"flex flex-col items-center"}>
                    <span className={"text-xs"}>W tym miesiącu zarobiłeś:</span>
                    <p className={"text-3xl"}>3090 zł</p>
                    <span className={"text-xs"}>Pozostało 1000 zł</span>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
