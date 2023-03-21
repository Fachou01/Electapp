import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import SideBar from "../../components/side-bar/SideBar";
import Container from "../../components/container/Container";



const ElectionDashboard = (children) => {

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
