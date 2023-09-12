export const sortByDate = (student) =>{
    student = student.sort((studentA, studentB) => {
        const dateA = new Date(studentA.nextMeeting);
        const dateB = new Date(studentB.nextMeeting);
        if (dateA < dateB) {
            return -1;
        } else if (dateA > dateB) {
            return 1;
        } else {
            return 0;
        }
    });
    return student
}