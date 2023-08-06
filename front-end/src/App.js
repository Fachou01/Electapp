import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin/AdminLogin";
import Dashboard from "./pages/Dashboard/Dashboard";
import AdminRegister from "./pages/AdminRegister/AdminRegister";
import ProtectedRoute from "./utils/ProtectedRoute";
import ElectionDashboard from "./pages/ElectionDashboard/ElectionDashboard";
import Overview from "./pages/ElectionDashboard/Overview/Overview";
import Settings from "./pages/ElectionDashboard/Settings/Settings";
import General from "./pages/ElectionDashboard/Settings/pages/General";
import Dates from "./pages/ElectionDashboard/Settings/pages/Dates";
import AuthContext from "./utils/contexts/AuthContext";


function App() {
	return (
		<AuthContext>
			<Router>
				<Routes>
					<Route path="/" >
						<Route element={<ProtectedRoute />}>
							<Route path="dashboard" element={<Dashboard />} />
							<Route path="election/:id/" element={<ElectionDashboard />} >
								<Route path="overview" element={<Overview />} />
								<Route path="settings" element={<Settings />} >
									<Route path="general" element={<General />} />
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
				</Routes>
			</Router>
		</AuthContext>
	);
}

export default App;
