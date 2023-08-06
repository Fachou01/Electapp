import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import useElectionDashboard from "./logic/useElectionDashboard";

const ElectionDashboard = () => {

  const { election } = useElectionDashboard();

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
