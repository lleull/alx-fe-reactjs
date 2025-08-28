import React from "react";

const ProfileSecurity = () => (
  <div>
    <h3>Security Settings</h3>
    <div className="card">
      <form className="security-form">
        <div>
          <label>Current Password: </label>
          <input type="password" />
        </div>
        <div>
          <label>New Password: </label>
          <input type="password" />
        </div>
        <div>
          <label>Confirm New Password: </label>
          <input type="password" />
        </div>
        <button type="submit">Update Password</button>
      </form>
    </div>
  </div>
);

export default ProfileSecurity;
