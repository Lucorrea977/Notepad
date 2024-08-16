import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: [],
    searchQuery: '',
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    toggleNote: (state, action) => {
      const note = state.notes.find(note => note.id === action.payload);
      if (note) {
        note.isExpanded = !note.isExpanded;
      }
    },
    addTask: (state, action) => {
      const { noteId, task } = action.payload;
      const note = state.notes.find(note => note.id === noteId);
      if (note) {
        note.tasks.push({ text: task, completed: false });
      }
    },
    toggleTask: (state, action) => {
      const { noteId, taskIndex } = action.payload;
      const note = state.notes.find(note => note.id === noteId);
      if (note && note.tasks[taskIndex]) {
        note.tasks[taskIndex].completed = !note.tasks[taskIndex].completed;
      }
    },
    updateNote: (state, action) => {
      const { id, title, content, color, date, alarm } = action.payload;
      const note = state.notes.find(note => note.id === id);
      if (note) {
        note.title = title;
        note.content = content;
        note.color = color;
        note.date = date;
        note.alarm = alarm;
      }
    },
    searchNotes: (state, action) => {
      state.searchQuery = action.payload.toLowerCase();
    }
  }
});

export const { addNote, deleteNote, toggleNote, addTask, toggleTask, updateNote, searchNotes } = notesSlice.actions;
export default notesSlice.reducer;
