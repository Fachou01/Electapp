import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import SideBar from "../../components/side-bar/SideBar";
import Container from "../../components/container/Container";
import { adminLogout } from "../admin-dashboard/services/admin-dashboard-service";





const ElectionDashboard = () => {
  const navigate = useNavigate();

  const handleProfileClick = (itemRef) => {
    if (itemRef === "signOut") {
      adminLogout();
      navigate("/");
    }
  };
  return (
    <>
      <div className="min-h-full">
        <SideBar />
        <Header />
        <main>
          <Container>
            <Outlet />
          </Container>
        </main>
      </div>
    </>
  );
};

export default ElectionDashboard;
