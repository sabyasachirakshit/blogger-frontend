import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider';
import CreateBlog from '../components/CreateBlog'; // Import CreateBlog component
import BlogList from '../components/BlogList'; // Import BlogList component
import Navbar from '../components/Navbar';

function BlogHome() {
 
  const { user} = useContext(AuthContext); // Get user and logout from context

  return (
    <div>
      <Navbar />
      <div>
        Welcome {user} <button onClick={logoutUser}>Logout</button>
      </div>
      <CreateBlog /> {/* Include the CreateBlog component */}
      <BlogList /> {/* Include the BlogList component */}
    </div>
  );
}

export default BlogHome;
