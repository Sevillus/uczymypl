"use client";
import { useRef, useEffect, useState } from "react";

function ProgressBar({ earnedThisMonth, userTarget, isLoading }) {
  const circleRef = useRef(null);
  const [rotation, setRotation] = useState(0);

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

  return (
      <div className="w-full flex-center min-[1700px]:pt-12">
        <div className="w-64 h-64 rounded-full flex-center drop-shadow-xl outer bg-slate-50">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="400px"
              height="400px"
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
                cx="200"
                cy="200"
                r="116"
                strokeLinecap="round"
                transform={`rotate(${rotation} 200 200)`} // Obrót elementu SVG
            />
          </svg>
          <div className="w-52 h-52 rounded-full absolute inner" />
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