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

  const nextMeetingDateConverted = nextMeetingDate.toLocaleDateString("pl-PL", {
    month: "numeric",
    day: "numeric",
    weekday: "long",
  });
  const hourConverted = nextMeetingDate.toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return nextMeetingDate;
};

export default meetingInfo;
