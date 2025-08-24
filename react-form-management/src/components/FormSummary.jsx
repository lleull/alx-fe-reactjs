import React from 'react';

const FormSummary = ({ formData }) => {
  return (
    <div className="form-summary">
      <h2>Form Submission Summary</h2>
      <p><strong>Username:</strong> {formData.username}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Password:</strong> {formData.password}</p>
    </div>
  );
};

export default FormSummary;