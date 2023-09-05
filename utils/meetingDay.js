const meetingInfo = (student) => {
    // Mapowanie dni tygodnia na ich numer w JavaScript (0 - niedziela, 1 - poniedziałek, ...)
    const daysOfWeek = {
        niedziela: 0,
        poniedziałek: 1,
        wtorek: 2,
        środa: 3,
        czwartek: 4,
        piątek: 5,
        sobota: 6
    };

// Aktualna data
    const today = new Date();

// Dzień i godzina spotkania
    const meetingDay = daysOfWeek[student.day.toLowerCase()];
    const [meetingHour, meetingMinute] = student.time.split(':').map(Number);


//
// // Tworzenie daty kolejnego spotkania
    let nextMeetingDate = new Date(today);
    nextMeetingDate.setDate(today.getDate() + ((meetingDay + 7 - today.getDay()) % 7));
    nextMeetingDate.setHours(meetingHour, meetingMinute, 0, 0);


// Sprawdzanie, czy kolejne spotkanie jest w tej samej tygodni
    if (nextMeetingDate <= today) {
        nextMeetingDate.setDate(nextMeetingDate.getDate() + 7);
    }

// Teraz 'nextMeetingDate' zawiera datę kolejnego spotkania
    const nextMeetingDateConverted= nextMeetingDate.toLocaleDateString('pl-PL', { month: 'numeric', day: 'numeric', weekday: 'long' })
    const hourConverted = nextMeetingDate.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit', hour12: false })


    return {
        nextMeetingDateConverted,
        hourConverted
    };
};

export default meetingInfo;