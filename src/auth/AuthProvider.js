import React, { createContext, useState, useEffect } from 'react';

// Create context
export const AuthContext = createContext();

// Create provider component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check local storage on initial load
    const savedUser = localStorage.getItem('username');
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  const login = (username) => {
    localStorage.setItem('username', username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem('username');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
