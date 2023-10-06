import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

function meetingInfo(day, time) {
  const timeZone='Europe/Warsaw'
  dayjs.tz.setDefault(timeZone);

  const daysOfWeek = {
    niedziela: 0,
    poniedziałek: 1,
    wtorek: 2,
    środa: 3,
    czwartek: 4,
    piątek: 5,
    sobota: 6,
  };

  const today = dayjs();

  const meetingDay = daysOfWeek[day.toLowerCase()];
  const [meetingHour, meetingMinute] = time.split(":").map(Number);

  let nextMeetingDate = today.clone();
  nextMeetingDate = nextMeetingDate.day(meetingDay);

  if (nextMeetingDate.isBefore(today, 'minute')) {
    nextMeetingDate = nextMeetingDate.add(1, 'week');
  }

  nextMeetingDate = nextMeetingDate.hour(meetingHour).minute(meetingMinute).second(0).millisecond(0);

  return nextMeetingDate;
}export default meetingInfo;