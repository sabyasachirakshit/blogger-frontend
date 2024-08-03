import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  // Function to check if the user is logged in
  const isLoggedIn = () => {
    return !!localStorage.getItem('username'); // Check if username exists in local storage
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={isLoggedIn() ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={isLoggedIn() ? <h1>Welcome to the Blog App</h1> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
