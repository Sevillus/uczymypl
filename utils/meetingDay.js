import dayjs from 'dayjs';
import 'dayjs/locale/pl';
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
  dayjs.locale('pl');
  const today = dayjs();

  const meetingDay = daysOfWeek[day.toLowerCase()];
  const [meetingHour, meetingMinute] = time.split(":").map(Number);

  let nextMeetingDate = today;
  nextMeetingDate = nextMeetingDate.set('day', meetingDay);

  if (nextMeetingDate < today) {
    nextMeetingDate = nextMeetingDate.add(7, 'day');
  }

  nextMeetingDate = nextMeetingDate.set('hour', meetingHour+2) ;
  nextMeetingDate = nextMeetingDate.set('minute', meetingMinute);
  console.log(nextMeetingDate.toDate())
  return nextMeetingDate.toDate();
};

export default meetingInfo;
