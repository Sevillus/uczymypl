import dayjs from "dayjs";

export const formatTime = (student) => {
    const [studentHour, studentMinute] = student.time.split(':').map(Number);
    const durationMinutes = student.duration; // Czas trwania w minutach

    // Oblicz godzinę i minutę wynikową
    let newHour = studentHour;
    let newMinute = studentMinute + durationMinutes;


    if (newMinute >= 60) {
        newHour += Math.floor(newMinute / 60);
        newMinute %= 60;
    }

    // Sformatuj wynik
    const formattedTime = dayjs().hour(newHour).minute(newMinute).format('HH:mm');

    return formattedTime;
};