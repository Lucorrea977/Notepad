// src/views/Home.js
import React, { useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import TaskSection from '../components/TaskSection';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Notepad</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <NoteForm />
      <NoteList searchTerm={searchTerm} />
      <TaskSection />
    </div>
  );
};

export default Home;
