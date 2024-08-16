import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateNote } from '../redux/notesSlice';

const EditNoteModal = ({ note, onClose }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const [color, setColor] = useState(note.color);
  const [dateTime, setDateTime] = useState(note.date);
  const [alarm, setAlarm] = useState(note.alarm);

  const handleUpdate = () => {
    dispatch(updateNote({ id: note.id, title, content, color, date: dateTime, alarm }));
    onClose();
  };

  return (
    <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-lg font-bold mb-2">Editar Nota</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full mb-2 p-2 border border-gray-300 rounded"
        />
        {/* Similar a NoteForm para elegir color, fecha, hora, etc. */}
        <button onClick={handleUpdate} className="bg-blue-500 text-white p-2 rounded">Guardar Cambios</button>
      </div>
    </div>
  );
};

export default EditNoteModal;
