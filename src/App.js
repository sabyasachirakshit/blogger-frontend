import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BlogHome from './pages/BlogHome'; // Import BlogHome
import { AuthContext } from './auth/AuthProvider';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={user ? <BlogHome /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
