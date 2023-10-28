"use client"
import useLastMeetings from "../../../../hooks/useLastMeetings";
import MeetingPopUpBox from "./MeetingPopUpBox";

const MeetingPopUp = ({ user, setMeetingHistory }) => {
  const { session, lastMeetings, setLastMeetings } = useLastMeetings(user, setMeetingHistory);

  const confirmHandler = async (student, option) => {
    await fetch(`api/meeting-history`, {
      method: "POST",
      body: JSON.stringify({
        addToHistory: option,
        student: student,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setLastMeetings((prevLastMeetings) =>
        prevLastMeetings.filter((prevStudent) => prevStudent._id !== student._id)
    );
    setMeetingHistory((prev) => [...prev, student]);
  };

  if (lastMeetings.length !== 0) {
    return (
        <div className={"w-full h-full absolute flex-center top-0 right-0 backgroundShadow "}>
          <div className={"py-6 px-4  border-2 lg:w-3/12 min-h-[40vh]  bg-white z-10 drop-shadow-xl flex flex-col gap-4 z-30  "}>
            <h1 className={"text-xl font-bold"}>
              Cześć {session?.user.name.split(" ")[0]} !
            </h1>
            <span>Czy poniższe zajęcia się odbyły?</span>
            {lastMeetings.map((student, index) => (
                <MeetingPopUpBox key={index} student={student} confirmHandler={confirmHandler}/>
            ))}
          </div>
        </div>
    );
  }
}
export default MeetingPopUp;
