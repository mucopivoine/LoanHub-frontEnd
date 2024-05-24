
import Cards from "../Cards/Cards";

import "./MainDash.css";
import LoanManagement from "../../Pages/LoanManagement";
import Sidebar from "../Sidebar";
import TableComponent from "../../Pages/Tablecomponent";
import Search from "../../Pages/Search";
import ViewManager from "../../Pages/ViewManagers";
import DashboardStatsGrid from "../../Data/DashboardStatsGrid";

// import Search from "../../Pages/Search";
import NewDash from "../../Pages/NewDash";
const MainDash = () => {
  return (
    <div className="MainDash flex flex-row">
      <div className="fixed">
        <Sidebar/>
      </div>
      <div>
        <Search/>
        <DashboardStatsGrid/>
        <LoanManagement/>
      </div>
      {/* <div className="">
      <div className="">
      <Search/>
      </div>
      <div className="">
      <DashboardStatsGrid/>
      </div>
      <div className="">
      {/* <NewDash /> */}
      {/* <div className="" > */}
       {/* <LoanManagement/>  */}
      {/* </div>
      <div> */}
      {/* <ViewManager/> */}
      {/* </div>
       <div> */}
        {/* <Settings/> */}
      {/* </div> 
      </div> */}
      {/* </div> */} 
    </div>
  );
};

export default MainDash;