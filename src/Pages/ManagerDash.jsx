<<<<<<< HEAD
// import { Outlet } from "react-router-dom"
import Barnav from "../Components/Barnav"
// import NewData from '../Data/NewData'
// import Loans from "./Loans"
// import Teachers from "./Teachers"
import Search from "./Search"
import LoanManagement from "./LoanManagement"
import DashboardStatsGrid from "./NewDash"
=======
import React from 'react';
import Barnav from "../Components/Barnav";
import Search from "./Search";
import DashboardStatsGrid from "./NewDash";
import Newdata from '../Data/NewData'
>>>>>>> 17aa24de7bf20b210ab916b160a09a1b0b8643bb

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
