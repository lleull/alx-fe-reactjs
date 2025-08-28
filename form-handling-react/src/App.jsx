import { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";
import "./App.css";

function App() {
  const [showFormik, setShowFormik] = useState(false);

  return (
    <div className="App">
      <div style={{ textAlign: "center", margin: "20px" }}>
        <button
          onClick={() => setShowFormik(false)}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: !showFormik ? "#4CAF50" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Controlled Form
        </button>
        <button
          onClick={() => setShowFormik(true)}
          style={{
            margin: "0 10px",
            padding: "10px 20px",
            backgroundColor: showFormik ? "#4CAF50" : "#ccc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Formik Form
        </button>
      </div>

      {showFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}

export default App;
