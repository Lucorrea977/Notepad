// src/components/TaskSection.js
import React, { useState } from 'react';

const TaskSection = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { id: Date.now(), content: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (taskId) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  return (
    <div className="mt-4 p-4 border rounded-lg">
      <h2 className="text-lg font-bold">Tasks</h2>
      <input
        type="text"
        placeholder="Add a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="mb-2 w-full p-2 border border-gray-300 rounded"
      />
      <button onClick={addTask} className="w-full p-2 bg-green-500 text-white rounded">Add Task</button>
      <ul className="mt-2">
        {tasks.map((t) => (
          <li key={t.id} className="flex items-center">
            <input
              type="checkbox"
              checked={t.completed}
              onChange={() => toggleTask(t.id)}
              className="mr-2"
            />
            <span className={t.completed ? 'line-through' : ''}>{t.content}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskSection;
