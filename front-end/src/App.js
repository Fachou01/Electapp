import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin-login/AdminLogin";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import AdminRegister from "./pages/admin-register/AdminRegister";
import ProtectedRoute from "./utils/ProtectedRoute";
import ElectionDashboard from "./pages/election-dashboard/ElectionDashboard";
import AuthContext from "./utils/contexts/AuthContext";

function App() {
  return (
    <AuthContext>
      <Router>
        <Routes>
          <Route path="/" element={<AdminLogin />}></Route>
          <Route path="/register" element={<AdminRegister />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<AdminDashboard />}></Route>
            <Route
              path="/election/:id/overview"
              element={<ElectionDashboard />}
            ></Route>
          </Route>
        </Routes>
      </Router>
    </AuthContext>
  );
}

export default App;
