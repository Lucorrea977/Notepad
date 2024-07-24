import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTask, toggleTask } from '../redux/actions';

const TaskItem = ({ task, index }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-2">
      <div
        className={`flex-1 ${task.completed ? 'line-through text-gray-500' : ''}`}
        onClick={() => dispatch(toggleTask(index))}
      >
        {task.text}
      </div>
      <button
        className="ml-4 text-red-600"
        onClick={() => dispatch(removeTask(index))}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
