// src/components/Layout/Header.jsx
import { useAuth } from "../../hook/useAuth";
const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header style={{ 
      backgroundColor: '#f8f9fa', 
      padding: '1rem', 
      borderBottom: '1px solid #e9ecef',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ margin: 0 }}>React Router Advanced</h1>
      {user && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <span>Welcome, {user.name}</span>
          <button 
            onClick={logout}
            style={{
              padding: '5px 10px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;