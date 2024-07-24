import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleCompleteTask } from '../redux/taskSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 bg-white border rounded-lg mb-2">
      <div className="flex-1">
        <h3 className={`${task.completed ? 'line-through' : ''}`}>{task.text}</h3>
        <p>Category: {task.category}</p>
        <p>Due Date: {task.dueDate}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => dispatch(toggleCompleteTask(task.id))}
          className="bg-green-500 text-white p-1 rounded"
        >
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button
          onClick={() => dispatch(removeTask(task.id))}
          className="bg-red-500 text-white p-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;

