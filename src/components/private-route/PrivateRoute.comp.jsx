/* eslint-disable react/prop-types */
import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuth = true;       // Simulate your authentication logic

export const PrivateRoute = ({ element ,...rest}) => {
  return isAuth ? element : <Navigate to="/" />;
};
