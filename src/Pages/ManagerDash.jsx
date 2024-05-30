import Search from "./Search";
import Barnav from "../Components/Barnav"

import React from 'react';

import DashboardStatsGrid from "../Data/DashboardStatsGrid";
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
