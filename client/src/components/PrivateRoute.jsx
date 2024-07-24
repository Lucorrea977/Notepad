// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { auth } from '../firebase.config';

const PrivateRoute = ({ children }) => {
  const user = getAuth(auth).currentUser; 

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

