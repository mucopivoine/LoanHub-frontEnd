
// import { Outlet } from "react-router-dom"
import Barnav from "../Components/Barnav"
// import NewData from '../Data/NewData'
// import Loans from "./Loans"
import React from 'react';
import Search from "./Search";
import DashboardStatsGrid from "./NewDash";
import Newdata from '../Data/NewData'


function ManagerDash() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Search />
      <Barnav />
      <div className="mx-auto mt-20">
        <DashboardStatsGrid />
        <div>
        <Newdata/>
        </div>
      </div>
    </div>
  );
}

export default ManagerDash;
