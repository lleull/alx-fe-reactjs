// src/components/Layout/Navigation.jsx
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
const Navigation = () => {
  const { user } = useAuth();

  return (
    <nav
      style={{
        backgroundColor: "#e9ecef",
        padding: "1rem",
        borderBottom: "1px solid #dee2e6",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "1rem",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#007bff" : "#000",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => ({
              color: isActive ? "#007bff" : "#000",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              color: isActive ? "#007bff" : "#000",
              textDecoration: "none",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Blog
          </NavLink>
        </li>
        {user ? (
          <li>
            <NavLink
              to="/profile"
              style={({ isActive }) => ({
                color: isActive ? "#007bff" : "#000",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Profile
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink
              to="/login"
              style={({ isActive }) => ({
                color: isActive ? "#007bff" : "#000",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Login
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
