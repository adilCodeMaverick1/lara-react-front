import React, { useState } from 'react';
import axios from '../api/axios';

const Course = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/courses', { name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-4 p-4 border rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Create Course</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Course Name</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Name" 
          required 
          className="mt-1 block w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Create Course
      </button>
    </form>
  );
};

export default Course;
