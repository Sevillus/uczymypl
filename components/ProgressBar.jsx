"use client";
import {useRef, useEffect, useState, useCallback, useLayoutEffect} from "react";

function ProgressBar({ earnedThisMonth, userTarget, isLoading }) {
  const circleRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const percent = earnedThisMonth / userTarget;

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.strokeDashoffset = `${900 - 900 * percent}`;
    }
  }, [earnedThisMonth, userTarget]);

  useEffect(() => {
    if (isLoading) {
      const rotationInterval = setInterval(() => {
        setRotation((prevRotation) => prevRotation + 5);
      }, 10);

      return () => clearInterval(rotationInterval);
    }
  }, [isLoading]);


  useLayoutEffect(() => {
    function updateScreenWidth() {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateScreenWidth);
    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  const isWideScreen = screenWidth >= 1900;

  return (
    <div className="w-full flex-center min-[1700px]:pt-12">
      <div className="w-64 h-64 min-[1900px]:w-80 min-[1900px]:h-80 rounded-full flex-center drop-shadow-xl outer bg-slate-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width={isWideScreen ? "500px" : "400px"}
          height={isWideScreen ? "500px" : "400px"}
          className="absolute"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#e91e63" />
              <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
          </defs>
          <circle
            ref={circleRef}
            cx={isWideScreen ? "250" : "200"}
            cy={isWideScreen ? "250" : "200"}
            r={isWideScreen ? "145" : "116"}
            strokeLinecap="round"
            style={{ strokeWidth: isWideScreen ? "30px" : "25px" }}
            transform={`rotate(${rotation} ${isWideScreen ? "250" : "200"} ${isWideScreen ? "250" : "200"}`}
                />
        </svg>
        <div className="w-52 h-52 min-[1900px]:w-64  min-[1900px]:h-64 rounded-full absolute inner" />
        {isLoading ? (
            <div>
                <p className={"text-xl"}>Ładowanie...</p>
            </div>

        ) : (
          <div className="flex flex-col items-center">
            <span className="text-xs">W tym miesiącu zarobiłeś:</span>
            <p className="text-3xl">{earnedThisMonth}zł</p>
            <span className="text-xs">
              Pozostało {userTarget - earnedThisMonth} zł
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProgressBar;
