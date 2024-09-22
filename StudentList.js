import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = ({ token }) => {
    const [students, setStudents] = useState([]);
    const [error, setError] = useState('');

    const fetchStudents = async () => {
        try {
            const res = await axios.get('http://localhost:5000/students', {
                headers: { Authorization: `Bearer ${token}` },
            });
            setStudents(res.data);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    useEffect(() => {
        fetchStudents();
    }, [token]);

    return (
        <div>
            <h2>Student List</h2>
            {error && <p>{error}</p>}
            <ul>
                {students.map(student => (
                    <li key={student.id}>{student.name} (ID: {student.studentId})</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
