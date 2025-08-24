
import "./App.css";
import ControlledForm from "./components/ControlledForm";
import FormikForm from "./components/FormikForm";

function App() {

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>React Form Handling Demo</h1>
      <ControlledForm />
      <FormikForm />
    </div>
  );
}

export default App;
