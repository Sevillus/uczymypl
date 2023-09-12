const convertDate = (nextMeetingDate) => {
    const date = new Date(nextMeetingDate)

    const dayConverted= date.toLocaleDateString('pl-PL', { month: 'numeric', day: 'numeric', weekday: 'long' })
    const hourConverted = date.toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit', hour12: false })

    return {
        dayConverted,
        hourConverted
    }
}
export default convertDate;