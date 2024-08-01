// src/StudentList.js
import React, { useEffect, useState } from 'react';
import { getAllStudents, deleteStudent } from './api';

const StudentList = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        const response = await getAllStudents();
        setStudents(response.data);
    };

    const handleDelete = async (id) => {
        await deleteStudent(id);
        fetchStudents();
    };

    return (
        <div>
            <h2>Students List</h2>
            <ul>
                {students.map(student => (
                    <li key={student.id}>
                        {student.name} - {student.email} - Class: {student.class?.name}
                        <button onClick={() => handleDelete(student.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
