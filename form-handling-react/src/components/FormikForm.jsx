import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormikForm() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Submitting data:", values);

    // Simulate API request
    setTimeout(() => {
      alert(`User ${values.username} registered successfully!`);
      setSubmitting(false);
      resetForm();
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
      <h2 style={{ textAlign: "center", color: "#333" }}>Registration Form (Formik)</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Username: </label>
              <Field
                type="text"
                name="username"
                style={{
                  padding: "10px",
                  border: errors.username && touched.username ? "2px solid red" : "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "red", margin: "5px 0 0", fontSize: "14px" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Email: </label>
              <Field
                type="email"
                name="email"
                style={{
                  padding: "10px",
                  border: errors.email && touched.email ? "2px solid red" : "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "red", margin: "5px 0 0", fontSize: "14px" }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ marginBottom: "5px", fontWeight: "bold" }}>Password: </label>
              <Field
                type="password"
                name="password"
                style={{
                  padding: "10px",
                  border: errors.password && touched.password ? "2px solid red" : "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "red", margin: "5px 0 0", fontSize: "14px" }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                padding: "12px",
                backgroundColor: isSubmitting ? "#ccc" : "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              onMouseOver={(e) => !isSubmitting && (e.target.style.backgroundColor = "#45a049")}
              onMouseOut={(e) => !isSubmitting && (e.target.style.backgroundColor = "#4CAF50")}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
