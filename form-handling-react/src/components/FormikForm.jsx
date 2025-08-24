// src/components/FormikForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // Simulate API call
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Registration successful!");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      setErrors({ submit: error.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Registration Form (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="username" style={{ display: "block", marginBottom: "5px" }}>
                Username:
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "red", fontSize: "14px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", fontSize: "14px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="password" style={{ display: "block", marginBottom: "5px" }}>
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", fontSize: "14px" }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: isSubmitting ? "#ccc" : "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {errors.submit && (
              <div style={{ color: "red", marginTop: "10px" }}>{errors.submit}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
