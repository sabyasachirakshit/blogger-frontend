import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import CreateBlog from '../components/CreateBlog'; // Import CreateBlog component
import BlogList from '../components/BlogList'; // Import BlogList component

function BlogHome() {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext); // Get user and logout from context

  function logoutUser() {
    logout(); // Call logout from context
    navigate('/login');
  }

  return (
    <div>
      <div>
        Welcome {user} <button onClick={logoutUser}>Logout</button>
      </div>
      <CreateBlog /> {/* Include the CreateBlog component */}
      <BlogList /> {/* Include the BlogList component */}
    </div>
  );
}

export default BlogHome;
