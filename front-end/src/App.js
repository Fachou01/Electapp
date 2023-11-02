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
import ElectionContext from "./utils/contexts/ElectionContext";
import Ballot from "./pages/ElectionDashboard/Ballot/Ballot";
import Voters from "./pages/ElectionDashboard/Voters/Voters";
import Preview from "./pages/ElectionDashboard/Preview/Preview";
import Launch from "./pages/ElectionDashboard/Launch/Launch";
import VoterLogin from "./pages/VoterDashboard/VoterLogin/VoterLogin";

import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import VoterBallot from "./pages/VoterDashboard/VoterBallot/VoterBallot";
import VoterElection from "./pages/VoterDashboard/VoterElection/VoterElection";
import NotFound from "./pages/NotFound/NotFound";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";


const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthContext>
				<ToastContainer className="customToast" autoClose="6000" hideProgressBar="true" />
				<ElectionContext>
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
										<Route path="ballot" element={<Ballot />} />
										<Route path="voters" element={<Voters />} />
										<Route path="preview" element={<Preview />} />
										<Route path="launch" element={<Launch />} />

									</Route>

								</Route>
								<Route path="/" element={<AdminLogin />}></Route>
								<Route path="/forgot-password" element={<ForgotPassword />}></Route>
								<Route path="/reset-password/:token" element={<ResetPassword />}></Route>
								<Route path="/register" element={<AdminRegister />}></Route>
								{/* Voter Panel */}
								<Route path="/vote">
									<Route path="election/:id/" element={<VoterElection />}>
										<Route path="login" element={<VoterLogin />} />
										<Route path="ballot" element={<VoterBallot />} />
									</Route>
								</Route>
							</Route>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Router>
				</ElectionContext>
			</AuthContext>
		</QueryClientProvider>
	);
}

export default App;
