import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="page-container">
    <h2>Home</h2>
    <p>Welcome to the React Router Advanced Demo!</p>
    <div className="card-grid">
      <div className="card">
        <h3>Nested Routes</h3>
        <p>Visit the Profile section to see nested routing in action.</p>
        <Link to="/profile">Go to Profile</Link>
      </div>
      <div className="card">
        <h3>Protected Routes</h3>
        <p>Try accessing the Dashboard without logging in first.</p>
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
      <div className="card">
        <h3>Dynamic Routes</h3>
        <p>Check out our blog posts with dynamic URLs.</p>
        <Link to="/blog">Go to Blog</Link>
      </div>
    </div>
  </div>
);

export default Home;