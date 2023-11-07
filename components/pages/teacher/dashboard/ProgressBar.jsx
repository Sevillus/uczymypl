"use client";
import { useEffect, useRef, useState } from "react";
import { useProgress, useRotation } from "../../../../hooks/useProgressBar";
import VisibilitySensor from "react-visibility-sensor";
import cn from "../../../../utils/cn";

function ProgressBar({ earnedThisMonth, userTarget, isLoading, homePage }) {
  const circleRef = useRef(null);
  const percent = useProgress(earnedThisMonth, userTarget);
  const rotation = useRotation(isLoading);
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibilityChange = (isVisible) => {
    setIsVisible(isVisible);
  };

  useEffect(() => {
    if (circleRef.current && isVisible) {
      circleRef.current.style.strokeDashoffset = `${900 - 900 * percent}`;
    }
  }, [earnedThisMonth, userTarget, isVisible]);

  return (
    <div
      className={cn(
        "progressBar",
        homePage ? "scale-110 lg:scale-125 mt-20 lg:mt-0" : "",
      )}
    >
      <VisibilitySensor onChange={handleVisibilityChange}>
        <div className="progressBar__outerCircle">
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
              strokeDasharray="900"
              ref={circleRef}
              cx="200"
              cy="200"
              r="116"
              strokeLinecap="round"
              transform={isLoading ? `rotate(${rotation} 200 200)` : ""}
            />
          </svg>
          <div className="progressBar__innerCircle" />
          {isLoading ? (
            <div>
              {homePage ? (
                <div className={"text-center"}>
                  <h2 className={"text-3xl text-bold"}>Gratulacje!</h2>
                  <span className={"span"}>Target osiągnięty!</span>
                </div>
              ) : (
                <p className="text-xl text-center">Ładowanie...</p>
              )}
            </div>
          ) : (
            <div>
              {userTarget < earnedThisMonth ? (
                  <div className="flex-column items-center">
                  <span className="text-xl">Gratulacje!:</span>
                  <p className="text-normal">Osiągnąłeś swój target!</p>
                </div>
              ) : (
                  <div className="flex-column items-center">
                  <span className="text-xs">W tym miesiącu zarobiłeś:</span>
                  <p className="text-3xl">{earnedThisMonth}zł</p>
                  <span className="text-xs">
                    Pozostało {userTarget - earnedThisMonth} zł
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </VisibilitySensor>
    </div>
  );
}

export default ProgressBar;
