import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";
function App() {
  return (
    <div className="min-h-screen flex flex-col gap-8 items-center justify-center bg-gray-100">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
