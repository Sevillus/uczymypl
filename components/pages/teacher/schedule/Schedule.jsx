"use client";
import useUserData from "../../../../hooks/useUserData";
import ScheduleMobile from "./ScheduleMobile";
import ScheduleDesktop from "./ScheduleDesktop";


const Schedule = () => {
  const {user, isLoading} = useUserData()
  return (
    <div className="flex-center min-h-[60vh]  py-6">
       <ScheduleMobile user={user} isLoading={isLoading}/>
       <ScheduleDesktop user={user} isLoading={isLoading}/>
    </div>
  );
};

export default Schedule;
