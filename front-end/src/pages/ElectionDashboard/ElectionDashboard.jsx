import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";

const ElectionDashboard = () => {

  return (
    <>
      <div className="min-h-full">
        <SideBar />
        <Header isDashboard={true} />
        <main>
            <Outlet />
        </main>
      </div>
    </>
  );
};

export default ElectionDashboard;
