// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import PrivateRoute from './components/Auth/PrivateRoute';
import Header from './components/Layout/Header';
import Navigation from './components/Layout/Navigation';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Auth/Login';
import Blog from './components/Blog/Blog';
import BlogList from './components/Blog/BlogList';
import BlogPost from './components/Blog/BlogPost';
import Profile from './components/Profile/Profile';
import ProfileDetails from './components/Profile/ProfileDetails';
import ProfileSettings from './components/Profile/ProfileSettings';
import ProfilePosts from './components/Profile/ProfilePosts';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Header />
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              
              {/* Blog routes with nested routing */}
              <Route path="/blog" element={<Blog />}>
                <Route index element={<BlogList />} />
                <Route path=":id" element={<BlogPost />} />
              </Route>
              
              {/* Protected profile routes with nested routing */}
              <Route path="/profile" element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }>
                <Route index element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
                <Route path="posts" element={<ProfilePosts />} />
              </Route>
              
              {/* 404 route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;