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
      <BlogList />
      <CreateBlog /> {/* Include the CreateBlog component */}
    </div>
  );
}

export default BlogHome;
