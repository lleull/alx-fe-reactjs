import React, { useState } from "react";

function RegistrationForm() {
  // State management
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    setError("");
    console.log("Submitting data:", formData);

    // Simulate API request
    setTimeout(() => {
      alert(`User ${formData.username} registered successfully!`);
    }, 500);
  };
  const username = formData.username;
  const email = formData.email;
  const password = formData.password;
  return (
    <div>
      <h2>Registration Form (Controlled)</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <div>
          <label>Username: </label>
          <input type="text" name="username" value={username} onChange={handleChange} />
        </div>

        <div>
          <label>Email: </label>
          <input type="email" name="email" value={email} onChange={handleChange} />
        </div>

        <div>
          <label>Password: </label>
          <input type="password" name="password" value={password} onChange={handleChange} />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
