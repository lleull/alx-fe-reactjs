// src/components/Profile/ProfileSettings.jsx
const ProfileSettings = () => {
  return (
    <div>
      <h3>Profile Settings</h3>
      <form style={{ 
        padding: '15px', 
        border: '1px solid #ddd', 
        borderRadius: '4px',
        maxWidth: '400px'
      }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Name:</label>
          <input 
            type="text" 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>Email:</label>
          <input 
            type="email" 
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button 
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default ProfileSettings;