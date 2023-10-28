import { useState, useEffect } from 'react';
import axios from 'axios';

const useStudentsPage = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [addNewStudentMenu, setAddNewStudentMenu] = useState(false);
    const [renderedStudents, setRenderedStudents] = useState([]);

    const fetchStudent = async () => {
        try {
            const res = await axios.get('/api/getUserData');
            setStudents(res.data.students);
            setRenderedStudents(res.data.students);
            setLoading(false);
        } catch (e) {
            console.log(e);
        }
    };

    const searchEngine = () => {
        if (search) {
            const filteredStudents = students.filter((student) =>
                student.name && student.name.toLowerCase().includes(search)
            );
            setRenderedStudents(filteredStudents);
        } else {
            setRenderedStudents(students);
        }
    };

    const addStudent = async (newStudentData) => {
        try {
            await axios.post('/api/add-student', newStudentData);
            fetchStudent();
            setAddNewStudentMenu(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchStudent();
    }, []);

    useEffect(() => {
        searchEngine();
    }, [search]);

    return {
        students,
        loading,
        search,
        setSearch,
        addNewStudentMenu,
        setAddNewStudentMenu,
        renderedStudents,
        addStudent,
        fetchStudent
    };
};

export default useStudentsPage;
