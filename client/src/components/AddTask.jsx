import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/actions';

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      dispatch(addTask({ text: taskText, completed: false }));
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md"
        placeholder="Add a new task"
      />
    </form>
  );
};

export default AddTask;
