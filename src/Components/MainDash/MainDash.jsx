// Uncomment the imports as necessary

import "./MainDash.css";
import LoanManagement from "../../Pages/LoanManagement";
import Sidebar from "../Sidebar";
import Search from "../../Pages/Search";
import ViewManager from "../../Pages/ViewManagers";
import DashboardStatsGrid from "../../Data/DashboardStatsGrid";


const MainDash = () => {
  return (
    <div className="MainDash flex flex-row">
      <div className="fixed">
        <Sidebar />
      </div>
      <div className="flex-grow ml-[200px] p-4"> {/* Add margin to avoid overlap with fixed Sidebar */}
        <Search />
        <DashboardStatsGrid />
        <LoanManagement />
        <ViewManager />
      </div>
    </div>
  );
};

export default MainDash;
