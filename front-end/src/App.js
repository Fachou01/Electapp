import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import AdminLogin from "./pages/admin-login/AdminLogin";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path="/dashboard" element={<AdminDashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
