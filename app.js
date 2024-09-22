import React, { useState } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';

const App = () => {
    const [token, setToken] = useState('');

    return (
        <div>
            <h1>Mess Management System</h1>
            {!token ? (
                <>
                    <Register />
                    <Login setToken={setToken} />
                </>
            ) : (
                <>
                    <StudentForm token={token} />
                    <StudentList token={token} />
                </>
            )}
        </div>
    );
};

export default App;
