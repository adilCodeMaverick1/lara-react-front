import React, { useState } from 'react';
import Teacher from './components/Teacher';
import Class from './components/Class';
import Student from './components/Student';
import AllStudents from './components/AllStudents';
import Course from './components/Course';

const App = () => {
  const [view, setView] = useState('teacher');

  return (
    <div className="container mx-auto">
      <header className="bg-gray-800 p-4">
        <nav className="flex justify-around">
          <button onClick={() => setView('teacher')} className="text-white hover:bg-gray-700 p-2 rounded">Create Teacher</button>
          <button onClick={() => setView('class')} className="text-white hover:bg-gray-700 p-2 rounded">Create Class</button>
          <button onClick={() => setView('student')} className="text-white hover:bg-gray-700 p-2 rounded">Create Student</button>
          <button onClick={() => setView('all-students')} className="text-white hover:bg-gray-700 p-2 rounded">View All Students</button>
          <button onClick={() => setView('course')} className="text-white hover:bg-gray-700 p-2 rounded">Create Course</button>
        </nav>
      </header>
      <main className="p-4">
        {view === 'teacher' && <Teacher />}
        {view === 'class' && <Class />}
        {view === 'student' && <Student />}
        {view === 'all-students' && <AllStudents />}
        {view === 'course' && <Course />}
      </main>
    </div>
  );
};

export default App;
