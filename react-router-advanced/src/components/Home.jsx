// src/components/Home.jsx
const Home = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Home Page</h2>
      <p>Welcome to the React Router Advanced demo application!</p>
      <p>This application demonstrates:</p>
      <ul>
        <li>Nested routes in the Profile section</li>
        <li>Protected routes that require authentication</li>
        <li>Dynamic routing for blog posts</li>
      </ul>
    </div>
  );
};

export default Home;