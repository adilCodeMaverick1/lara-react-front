// src/api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

export const createTeacher = (data) => axios.post(`${API_URL}/teachers`, data);
export const createClass = (data) => axios.post(`${API_URL}/classes`, data);
export const createStudent = (data) => axios.post(`${API_URL}/students`, data);
export const getAllStudents = () => axios.get(`${API_URL}/students`);
export const getStudentById = (id) => axios.get(`${API_URL}/students/${id}`);
export const updateStudentClass = (id, data) => axios.put(`${API_URL}/students/${id}`, data);
export const deleteStudent = (id) => axios.delete(`${API_URL}/students/${id}`);
