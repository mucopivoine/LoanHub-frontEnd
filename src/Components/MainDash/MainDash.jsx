
import Cards from "../Cards/Cards";

import "./MainDash.css";
import LoanManagement from "../../Pages/LoanManagement";
import Sidebar from "../Sidebar";
import TableComponent from "../../Pages/Tablecomponent";
import Search from "../../Pages/Search";
import ViewManager from "../../Pages/ViewManagers";
const MainDash = () => {
  return (
    <div className="MainDash ">

      <div className="">
     
      <Search/>
      <div className="">
      <Cards />
      <div className="mb-14 gap-0" >
      <LoanManagement/>
      </div>
      <div>
      <ViewManager/>
      </div>
       <div>
        {/* <Settings/> */}
      </div> 
      </div>
      </div>
    </div>
  );
};

export default MainDash;