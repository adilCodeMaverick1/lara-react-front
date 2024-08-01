// src/Form.js
import React, { useState } from 'react';
import { createTeacher, createClass, createStudent } from './api';

const Form = () => {
    const [teacher, setTeacher] = useState({ name: '', email: '' });
    const [classData, setClassData] = useState({ name: '' });
    const [student, setStudent] = useState({ name: '', email: '', class_id: '' });

    const handleTeacherChange = (e) => {
        const { name, value } = e.target;
        setTeacher({ ...teacher, [name]: value });
    };

    const handleClassChange = (e) => {
        const { name, value } = e.target;
        setClassData({ ...classData, [name]: value });
    };

    const handleStudentChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    const submitTeacher = async (e) => {
        e.preventDefault();
        await createTeacher(teacher);
        setTeacher({ name: '', email: '' });
    };

    const submitClass = async (e) => {
        e.preventDefault();
        await createClass(classData);
        setClassData({ name: '' });
    };

    const submitStudent = async (e) => {
        e.preventDefault();
        await createStudent(student);
        setStudent({ name: '', email: '', class_id: '' });
    };

    return (
        <div>
            <h2>Create Teacher</h2>
            <form onSubmit={submitTeacher}>
                <input name="name" value={teacher.name} onChange={handleTeacherChange} placeholder="Name" />
                <input name="email" value={teacher.email} onChange={handleTeacherChange} placeholder="Email" />
                <button type="submit">Add Teacher</button>
            </form>

            <h2>Create Class</h2>
            <form onSubmit={submitClass}>
                <input name="name" value={classData.name} onChange={handleClassChange} placeholder="Class Name" />
                <button type="submit">Add Class</button>
            </form>

            <h2>Create Student</h2>
            <form onSubmit={submitStudent}>
                <input name="name" value={student.name} onChange={handleStudentChange} placeholder="Name" />
                <input name="email" value={student.email} onChange={handleStudentChange} placeholder="Email" />
                <input name="class_id" value={student.class_id} onChange={handleStudentChange} placeholder="Class ID" />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
};

export default Form;
