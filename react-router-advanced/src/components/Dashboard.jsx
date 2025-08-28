import React from 'react';

const Dashboard = () => (
  <div className="page-container">
    <h2>Dashboard</h2>
    <p>This is a protected route. Only authenticated users can see this content.</p>
    <div className="card">
      <h3>User Statistics</h3>
      <ul>
        <li>Posts: 24</li>
        <li>Followers: 143</li>
        <li>Following: 87</li>
      </ul>
    </div>
  </div>
);

export default Dashboard;