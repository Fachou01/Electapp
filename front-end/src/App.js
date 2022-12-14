import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/admin-login/AdminLogin";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import AdminRegister from "./pages/admin-register/AdminRegister";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AdminLogin />}></Route>
        <Route path="/register" element={<AdminRegister />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<AdminDashboard />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
