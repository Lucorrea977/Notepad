// src/redux/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload.text,
        category: action.payload.category,
        dueDate: action.payload.dueDate,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      const { id, newText, newCategory, newDueDate } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.text = newText;
        task.category = newCategory;
        task.dueDate = newDueDate;
      }
    },
    toggleCompleteTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, removeTask, updateTask, toggleCompleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
