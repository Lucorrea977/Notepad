import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskManager from './views/TaskManager';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<TaskManager />} />

    </Routes>

  );
};

export default App;
