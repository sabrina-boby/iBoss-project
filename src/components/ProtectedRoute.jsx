import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ProtectedRoute = ({ children }) => {
  const { auth } = useContext(AppContext);

  if (!auth) {
    return <Navigate to="/" replace/>;  // Redirect to login if not authenticated
  }

  return children;
};

export default ProtectedRoute;