import React, { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import TaskSection from '../components/TaskSection';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Notepad</h1>
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="p-2 bg-gray-700 text-white rounded"
        >
          Toggle Dark Mode
        </button>
      </div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <NoteForm />
        <TaskSection />
      </div>
      <NoteList searchTerm={searchTerm} category="task" />
      <NoteList searchTerm={searchTerm} category="daily" />
      <NoteList searchTerm={searchTerm} />
    </div>
  );
};

export default Home;
