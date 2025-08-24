// src/components/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
        Return to Home
      </Link>
    </div>
  );
};

export default NotFound;