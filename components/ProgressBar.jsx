import { useState, useEffect, useRef } from 'react';

function ProgressBar({ earnedThisMonth, userTarget}) {
    const circleRef = useRef(null);

    const percent = (earnedThisMonth / userTarget) ;

        if (circleRef.current) {
            circleRef.current.style.strokeDashoffset = `${900-900*percent}`;
        }




    return (
        <div className={"w-96 h-96 flex-center "}>
            <div className={"w-80 h-80  rounded-full flex-center drop-shadow-xl outer bg-slate-50"} >
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="500px" height="500px" className={"absolute"}>
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset="0%" stopColor="#e91e63" />
                            <stop offset="100%" stopColor="#673ab7" />
                        </linearGradient>
                    </defs>
                    <circle
                        ref={circleRef} // Przypisz referencję do elementu circle
                        cx="250"
                        cy="250"
                        r="144"
                        strokeLinecap="round"
                    />
                </svg>
                <div className={"w-64 h-64 rounded-full absolute inner"}/>
                <div className={"flex flex-col items-center"}>
                    <span className={"text-xs"}>W tym miesiącu zarobiłeś:</span>
                    <p className={"text-3xl"}>{earnedThisMonth}zł</p>
                    <span className={"text-xs"}>Pozostało {userTarget - earnedThisMonth} zł</span>
                </div>
            </div>
        </div>
    );
}

export default ProgressBar;
