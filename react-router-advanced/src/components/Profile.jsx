import React from "react";
import { Link, Outlet } from "react-router-dom";

const Profile = () => (
  <div className="page-container">
    <h2>Profile</h2>
    <p>Manage your account settings:</p>

    <nav className="profile-nav">
      <Link to="/profile">Details</Link>
      <Link to="/profile/settings">Settings</Link>
      <Link to="/profile/security">Security</Link>
    </nav>

    <div className="profile-content">
      <Outlet />
    </div>
  </div>
);

export default Profile;
