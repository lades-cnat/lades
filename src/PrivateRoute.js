import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './authContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { loggedIn } = useAuth();

  return loggedIn ? <Route {...rest} element={<Component />} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
