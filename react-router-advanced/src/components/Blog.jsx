import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => (
  <div className="page-container">
    <h2>Blog</h2>
    <p>Check out our latest posts:</p>
    <ul className="post-list">
      <li><Link to="/blog/post-1">Getting Started with React Router</Link></li>
      <li><Link to="/blog/post-2">Advanced Routing Techniques</Link></li>
      <li><Link to="/blog/post-3">Authentication in React Apps</Link></li>
    </ul>
  </div>
);

export default Blog;