import React from 'react';
import Barnav from "../Components/Barnav";
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
