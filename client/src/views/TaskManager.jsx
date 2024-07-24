

import React from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

const TaskManager = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">TaskFlow</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default TaskManager;
