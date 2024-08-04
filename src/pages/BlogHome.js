import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";

function BlogHome() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext); // Get user and logout from context

  function logoutUser() {
    logout(); // Call logout from context
    navigate("/login");
  }

  return (
    <div>
      Welcome {user} <button onClick={logoutUser}>Logout</button>
    </div>
  );
}

export default BlogHome;
