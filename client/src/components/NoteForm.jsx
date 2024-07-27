
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notesSlice';

const NoteForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [color, setColor] = useState('bg-white');
  const [dateTime, setDateTime] = useState('');
  const [alarm, setAlarm] = useState('');
  const [showAlarmPicker, setShowAlarmPicker] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      title,
      content,
      color,
      date: dateTime,
      alarm: alarm || '',
      isExpanded: false,
      tasks: [] // Inicialmente sin tareas
    };
    dispatch(addNote(newNote));
    setTitle('');
    setContent('');
    setColor('bg-white');
    setDateTime('');
    setAlarm('');
    setShowAlarmPicker(false);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-2 p-2 border border-gray-300 rounded"
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full mb-2 p-2 border border-gray-300 rounded"
        required
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="mb-2"
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={(e) => setDateTime(e.target.value)}
        className="w-full mb-2 p-2 border border-gray-300 rounded"
        placeholder="Date and Time"
      />
      <div className="mb-2">
        <button
          type="button"
          onClick={() => setShowAlarmPicker(!showAlarmPicker)}
          className="p-2 bg-green-500 text-white rounded"
        >
          {showAlarmPicker ? 'Hide Alarm' : 'Set Alarm'}
        </button>
        {showAlarmPicker && (
          <input
            type="datetime-local"
            value={alarm}
            onChange={(e) => setAlarm(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            placeholder="Set Alarm (optional)"
          />
        )}
      </div>
      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Add Note</button>
    </form>
  );
};

export default NoteForm;
