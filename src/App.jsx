import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";

function App() {

  const token = localStorage.getItem("token");

  // ⭐ If not logged in → show signup
  if (!token) {
    return <SignUp />;
  }

  // ⭐ If logged in → show dashboard
  return <Dashboard />;
}

export default App;