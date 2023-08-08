import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import useElectionDashboard from "./logic/useElectionDashboard";

import './ElectionDashboard.css';

const ElectionDashboard = () => {

  const { election } = useElectionDashboard();

  return (
    <>
      <div className="h-full">
        <SideBar />
        <Header isDashboard={true} />
        <main className="main"> 
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default ElectionDashboard;
