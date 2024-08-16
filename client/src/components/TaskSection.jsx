
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/notesSlice';

const TaskSection = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const addNewTask = () => {
    if (task) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <div className="mt-4 p-4 border rounded-lg">
      <h2 className="text-lg font-bold">Tareas</h2>
      <input
        type="text"
        placeholder="Agregar una tarea..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="mb-2 w-full p-2 border border-gray-300 rounded"
      />
      <button onClick={addNewTask} className="w-full p-2 bg-green-500 text-white rounded">Agregar Tarea</button>
    </div>
  );
};

export default TaskSection;
