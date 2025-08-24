// src/components/Profile/Profile.jsx
import { Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';
const Profile = () => {
  const { user } = useAuth();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Profile</h2>
      <p>Welcome to your profile, {user.name}!</p>
      
      <nav style={{ marginBottom: '20px' }}>
        <ul style={{ 
          listStyle: 'none', 
          display: 'flex', 
          gap: '1rem', 
          margin: 0, 
          padding: 0,
          borderBottom: '1px solid #dee2e6'
        }}>
          <li>
            <NavLink 
              to="/profile"
              end
              style={({ isActive }) => ({
                padding: '10px',
                display: 'block',
                color: isActive ? '#007bff' : '#000',
                textDecoration: 'none',
                borderBottom: isActive ? '2px solid #007bff' : '2px solid transparent'
              })}
            >
              Details
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile/settings"
              style={({ isActive }) => ({
                padding: '10px',
                display: 'block',
                color: isActive ? '#007bff' : '#000',
                textDecoration: 'none',
                borderBottom: isActive ? '2px solid #007bff' : '2px solid transparent'
              })}
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/profile/posts"
              style={({ isActive }) => ({
                padding: '10px',
                display: 'block',
                color: isActive ? '#007bff' : '#000',
                textDecoration: 'none',
                borderBottom: isActive ? '2px solid #007bff' : '2px solid transparent'
              })}
            >
              Posts
            </NavLink>
          </li>
        </ul>
      </nav>
      
      <Outlet />
    </div>
  );
};

export default Profile;