import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/admin-login/AdminLogin";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import AdminRegister from "./pages/admin-register/AdminRegister";
import ProtectedRoute from "./utils/ProtectedRoute";
import ElectionDashboard from "./pages/election-dashboard/ElectionDashboard";
import Overview from "./pages/election-dashboard/Overview/Overview";


function App() {
  return (
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

        <Route path="/login" element={<AdminLogin />} />
        <Route path="/register" element={<AdminRegister />} />

      </Routes>
    </Router>
  );
}

export default App;
