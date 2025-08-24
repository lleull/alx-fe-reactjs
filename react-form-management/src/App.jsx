import "./styles/App.css";
import ControlledRegistrationForm from "./components/ControlledRegistrationForm";
import FormikRegistrationForm from "./components/FormikRegistrationForm";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>User Registration Form</h1>
      <ControlledRegistrationForm />
      <FormikRegistrationForm />
    </div>
  );
}

export default App;