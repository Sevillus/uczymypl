"use client"
import React, { useState } from 'react';

const NewAccount = () => {
    const [selectedRole, setSelectedRole] = useState('');

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };

    const makeApiCall = async (e) => {
        e.preventDefault();

        await fetch("/api/test", {
            method: "POST",
            body: JSON.stringify({ role: selectedRole }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    };

    return (
        <div>
            <h1>Podaj swoją rolę</h1>
            <form onSubmit={makeApiCall}>
                <label>
                    <input
                        type="radio"
                        value="student"
                        checked={selectedRole === "student"}
                        onChange={handleRoleChange}
                    />
                    Student
                </label>
                <label>
                    <input
                        type="radio"
                        value="teacher"
                        checked={selectedRole === "teacher"}
                        onChange={handleRoleChange}
                    />
                    Teacher
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NewAccount;
