import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchNotes } from '../redux/notesSlice';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(searchNotes(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={query}
      onChange={handleSearch}
      className="p-2 border border-gray-300 rounded mb-4 w-full"
    />
  );
};

export default SearchBar;