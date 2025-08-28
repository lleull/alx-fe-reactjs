import React from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  
  // Simulated blog post data
  const posts = {
    'post-1': {
      title: 'Getting Started with React Router',
      content: 'Learn how to set up basic routing in your React applications with React Router.'
    },
    'post-2': {
      title: 'Advanced Routing Techniques',
      content: 'Explore nested routes, protected routes, and dynamic routing in React.'
    },
    'post-3': {
      title: 'Authentication in React Apps',
      content: 'Implement user authentication and protected routes in your React applications.'
    }
  };
  
  const post = posts[postId];
  
  if (!post) {
    return (
      <div className="page-container">
        <h2>Post Not Found</h2>
        <p>The requested blog post does not exist.</p>
        <Link to="/blog">← Back to Blog</Link>
      </div>
    );
  }
  
  return (
    <div className="page-container">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <Link to="/blog">← Back to Blog</Link>
    </div>
  );
};

export default BlogPost;