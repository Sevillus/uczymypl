import dayjs from "dayjs";

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

    const startDay = firstDateOfMonth.day(); // Dzień tygodnia, od którego rozpoczynamy
    const daysInMonth = lastDateOfMonth.date();

    const arrayOfDate = [];


    let startIndex = startDay === 0 ? 6 : startDay - 1;

    // days before current month
    for (let i = 0; i < startIndex; i++) {
        const previousMonthDate = firstDateOfMonth.subtract(startIndex - i, "day");
        arrayOfDate.push({
            currentMonth: false,
            date: previousMonthDate
        });
    }

    // current month
    for (let i = 1; i <= daysInMonth; i++) {
        const currentDate = firstDateOfMonth.date(i);
        arrayOfDate.push({
            currentMonth: true,
            date: currentDate,
            today: currentDate.isSame(dayjs(), "day"),
        });
    }

    // days of next month
    const remainingDays = 42 - arrayOfDate.length;
    for (let i = 1; i <= remainingDays; i++) {
        const nextMonthDate = lastDateOfMonth.add(i, "day");
        arrayOfDate.push({
            currentMonth: false,
            date: nextMonthDate,
        });
    }

    return arrayOfDate;
};
