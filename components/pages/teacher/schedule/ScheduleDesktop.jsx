import ScheduleBox from "./ScheduleBox";

const ScheduleDesktop = ({ user, isLoading }) => {

  return (
    <div className="flex flex-col hidden lg:flex lg:flex-row lg:justify-between  w-11/12  h-full lg:border">
      {user?.schedule?.map((day, index) => (
        <div key={index} className="flex-col w-full  h-full lg:border  bg-slate-50 hidden lg:flex">
          <div className="schedule__header">
            <h1>{day.dayName}</h1>
          </div>
          <ScheduleBox isLoading={isLoading} day={day} />
        </div>
      ))}
    </div>
  );
};
export default ScheduleDesktop;
