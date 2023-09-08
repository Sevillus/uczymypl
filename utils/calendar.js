import dayjs from "dayjs";

export const generateDate = (month = dayjs().month(), year = dayjs().year()) => {
    const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
    const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

    const startDay = firstDateOfMonth.day(); // Dzień tygodnia, od którego rozpoczynamy
    const daysInMonth = lastDateOfMonth.date();

    const arrayOfDate = [];

    // Ustalamy indeks, od którego rozpocznie się kalendarz (0 - niedziela, 1 - poniedziałek, ..., 6 - sobota)
    let startIndex = startDay === 0 ? 6 : startDay - 1;

    // Wypełniamy dni przed rozpoczęciem miesiąca
    for (let i = 0; i < startIndex; i++) {
        const previousMonthDate = firstDateOfMonth.subtract(startIndex - i, "day");
        arrayOfDate.push({
            currentMonth: false,
            date: previousMonthDate
        });
    }

    // Wypełniamy dni aktualnego miesiąca
    for (let i = 1; i <= daysInMonth; i++) {
        const currentDate = firstDateOfMonth.date(i);
        arrayOfDate.push({
            currentMonth: true,
            date: currentDate,
            today: currentDate.isSame(dayjs(), "day"),
        });
    }

    // Uzupełniamy resztę kalendarza
    const remainingDays = 35 - arrayOfDate.length;
    for (let i = 1; i <= remainingDays; i++) {
        const nextMonthDate = lastDateOfMonth.add(i, "day");
        arrayOfDate.push({
            currentMonth: false,
            date: nextMonthDate,
        });
    }

    return arrayOfDate;
};
