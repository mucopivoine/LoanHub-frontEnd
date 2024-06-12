import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardStatsGrid from "../../Data/DashboardStatsGrid";
import Newdata from '../../Data/NewData'
import Sidebar from '../Sidebar';
import Search from '../../Pages/Search';
import StatsGrids from './StatsGrids';

function MainDash() {
 
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Search />
      <Sidebar />
      <div className="mx-auto mt-20 ml-36">
        <StatsGrids/>
        <Newdata/>
      </div>
    </div>
  );
}

export default MainDash;
