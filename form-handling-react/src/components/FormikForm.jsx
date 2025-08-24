import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 chars").required("Password is required"),
});

function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values) => {
    console.log("Formik Submitted:", values);
    // axios.post("API_URL", values)
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Formik Register</h2>

          <div className="mb-3">
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-3">
            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <div className="mb-3">
            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
