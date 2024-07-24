
import React from 'react';

const FilterTasks = ({ filter, setFilter, setSearchTerm }) => {
  return (
    <div className="mb-4 flex justify-between items-center">
      <input
        type="text"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border rounded p-2 w-1/2"
        placeholder="Search Tasks"
      />
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border rounded p-2"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};

export default FilterTasks;
