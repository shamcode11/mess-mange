import React, { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ token }) => {
    const [studentId, setStudentId] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await axios.post('http://localhost:5000/students', { studentId, name }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('Student added!');
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                placeholder="Student ID"
                required
            />
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Student Name"
                required
            />
            <button type="submit">Add Student</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default StudentForm;
