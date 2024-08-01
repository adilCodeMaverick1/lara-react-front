import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const AllStudents = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            const response = await axios.get('/students');
            setStudents(response.data);
        };
        fetchStudents();
    }, []);

    const handleUpdateClass = async (studentId) => {
        const newClassId = prompt('Enter new class ID:');
        if (newClassId) {
            await axios.put(`/students/${studentId}`, { class_id: newClassId });
            const updatedStudents = students.map(student =>
                student.id === studentId ? { ...student, class_id: newClassId } : student
            );
            setStudents(updatedStudents);
        }
    };

    const handleSoftDelete = async (studentId) => {
        await axios.delete(`/students/${studentId}`);
        const updatedStudents = students.filter(student => student.id !== studentId);
        setStudents(updatedStudents);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">All Students</h2>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Class</th>
                        <th className="px-4 py-2">Courses</th>
                        <th className="px-4 py-2">Teachers</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id} className="border-t">
                            <td className="px-4 py-2">{student.name}</td>
                            <td className="px-4 py-2">{student.email}</td>
                            <td className="px-4 py-2">{student.class.name}</td>
                            <td className="px-4 py-2">
                                {student.class.courses.map(course => course.name).join(', ')}
                            </td>
                            <td className="px-4 py-2">
                                {student.class.teachers.map(teacher => teacher.name).join(', ')}
                            </td>
                            <td className="px-4 py-2">
                                <button
                                    onClick={() => handleUpdateClass(student.id)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                >
                                    Update Class
                                </button>
                                <button
                                    onClick={() => handleSoftDelete(student.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                                >
                                    Soft Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllStudents;
