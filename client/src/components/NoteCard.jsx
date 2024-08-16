import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, toggleNote, toggleTask } from '../redux/notesSlice';

const NoteCard = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteNote(note.id));
  };

  const handleToggle = () => {
    dispatch(toggleNote(note.id));
  };

  const handleToggleTask = (taskIndex) => {
    dispatch(toggleTask({ noteId: note.id, taskIndex }));
  };

  const formatDate = (dateTime) => {
    if (!dateTime) return '';
    const [datePart, timePart] = dateTime.split('T');
    const date = new Date(datePart).toLocaleDateString();
    const time = timePart ? new Date(`1970-01-01T${timePart}`).toLocaleTimeString() : '';
    return `${date} ${time}`;
  };

  return (
    <div
      className={`p-4 rounded-lg ${note.color} shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer`}
      onClick={handleToggle}
    >
      <h2 className="text-lg font-bold">{note.title}</h2>
      {note.date && !note.isExpanded && (
        <p className="text-gray-500">{formatDate(note.date)}</p>
      )}
      {note.isExpanded && (
        <>
          <p className="mt-2">{note.content}</p>
          {note.alarm && (
            <p className="mt-2 text-red-500">Alarm set for: {formatDate(note.alarm)}</p>
          )}
          {note.tasks.length > 0 && (
            <ul className="mt-2">
              {note.tasks.map((task, index) => (
                <li key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(index)}
                    className="mr-2"
                  />
                  <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
      <button
        onClick={(e) => { e.stopPropagation(); handleDelete(); }}
        className="mt-2 text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;
