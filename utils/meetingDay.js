const meetingInfo = (day, time) => {

  const daysOfWeek = {
    niedziela: 0,
    poniedziałek: 1,
    wtorek: 2,
    środa: 3,
    czwartek: 4,
    piątek: 5,
    sobota: 6,
  };

  const today = new Date();

  const meetingDay = daysOfWeek[day.toLowerCase()];
  const [meetingHour, meetingMinute] = time.split(":").map(Number);

  let nextMeetingDate = new Date(today);
  nextMeetingDate.setDate(
    today.getDate() + ((meetingDay + 7 - today.getDay()) % 7),
  );
  nextMeetingDate.setHours(meetingHour, meetingMinute, 0, 0);

  if (nextMeetingDate <= today) {
    nextMeetingDate.setDate(nextMeetingDate.getDate() + 7);
  }


  return nextMeetingDate;
};

export default meetingInfo;
