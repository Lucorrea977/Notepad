import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskManager from './views/TaskManager';
import Login from './views/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/tasks"
        element={
          <PrivateRoute>
            <TaskManager />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<TaskManager />} />
    </Routes>
  );
}

export default App;

