import React, { useState } from "react";

function RegistrationForm() {
  // State management
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      username: "",
      email: "",
      password: "",
    });

    let hasError = false;
    const newErrors = {
      username: "",
      email: "",
      password: "",
    };

    // Individual field validation
    if (!formData.username) {
      newErrors.username = "Username is required!";
      hasError = true;
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long!";
      hasError = true;
    }

    if (!formData.email) {
      newErrors.email = "Email is required!";
      hasError = true;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address!";
      hasError = true;
    }

    if (!formData.password) {
      newErrors.password = "Password is required!";
      hasError = true;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long!";
      hasError = true;
    }

    if (hasError) {
      setErrors(newErrors);
      return;
    }

    console.log("Submitting data:", formData);

    // Simulate API request
    setTimeout(() => {
      alert(`User ${formData.username} registered successfully!`);
    }, 500);
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Registration Form (Controlled)</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Username: </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={{
              padding: "10px",
              border: errors.username ? "2px solid red" : "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.username && (
            <p style={{ color: "red", margin: "5px 0 0", fontSize: "14px" }}>{errors.username}</p>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Email: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: "10px",
              border: errors.email ? "2px solid red" : "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", margin: "5px 0 0", fontSize: "14px" }}>{errors.email}</p>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Password: </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={{
              padding: "10px",
              border: errors.password ? "2px solid red" : "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          {errors.password && (
            <p style={{ color: "red", margin: "5px 0 0", fontSize: "14px" }}>{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
