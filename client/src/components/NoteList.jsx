// src/components/NoteList.js
import React from 'react';
import { useSelector } from 'react-redux';
import NoteCard from './NoteCard';

const NoteList = ({ searchTerm, category }) => {
  const notes = useSelector(state => state.notes.notes);

  const filteredNotes = notes.filter(note =>
    note.category === category &&
    (note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="mt-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {filteredNotes.map(note => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  );
};
export default NoteList;
