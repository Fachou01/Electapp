import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import AdminLogin from "../pages/admin-login/AdminLogin";
import { getToken } from "./getToken";

const ProtectedRoute = () => {
  const isAuth = getToken();
  return isAuth ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
