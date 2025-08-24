// src/App.jsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./component/PostComponen";
import "./App.css";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Optional: prevents refetch when window gains focus
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1 style={{ textAlign: "center", padding: "20px" }}>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
