import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/admin-login/AdminLogin";
import AdminDashboard from "./pages/admin-dashboard/AdminDashboard";
import AdminRegister from "./pages/admin-register/AdminRegister";
import ProtectedRoute from "./utils/ProtectedRoute";
import ElectionDashboard from "./pages/election-dashboard/ElectionDashboard";
import Overview from "./pages/election-dashboard/Overview/Overview";
import Settings from "./pages/election-dashboard/Settings/Settings";
import General from "./pages/election-dashboard/Settings/pages/General";
import Dates from "./pages/election-dashboard/Settings/pages/Dates";


function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" >
					<Route element={<ProtectedRoute />}>
						<Route path="dashboard" element={<AdminDashboard />} />

						<Route path="election/:id/" element={<ElectionDashboard />} >
							<Route path="overview" element={<Overview />} />
							<Route path="settings" element={<Settings />} >
								<Route path="general"  element={<General />} />
								<Route path="dates" element={<Dates />} />
								<Route path="email" element={<Overview />} />
								<Route path="results" element={<Overview />} />
								<Route path="delete" element={<Overview />} />
							</Route>
							<Route path="ballot" />
							<Route path="voters" />
							<Route path="preview" />
							<Route path="launch" />
						</Route>

					</Route>
					<Route path="/" element={<AdminLogin />}></Route>
					<Route path="/register" element={<AdminRegister />}></Route>
				</Route>

				<Route path="/login" element={<AdminLogin />} />
				<Route path="/register" element={<AdminRegister />} />

			</Routes>
		</Router>
	);
}

export default App;
