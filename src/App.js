import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { AuthContext } from './auth/AuthProvider';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={user ? <h1>Welcome to the Blog App</h1> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
