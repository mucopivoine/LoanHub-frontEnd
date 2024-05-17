
import Cards from "../Cards/Cards";

import "./MainDash.css";
import LoanManagement from "../../Pages/LoanManagement";
import Sidebar from "../Sidebar";
import TableComponent from "../../Pages/Tablecomponent";
import ManageLoans from "../ManageLoans";
import Search from "../../Pages/Search";
const MainDash = () => {
  return (
    <div className="MainDash ">
      <div className="">
      <div className="">
      <Sidebar/>
      </div>
      <Search/>
      <div className="">
      <Cards />
      <div className="mb-14 gap-0" >
      <LoanManagement/>
      </div>
      <div>
     
      <TableComponent/>
      </div>
      <div>
        <ManageLoans/>
      </div>
      </div>
      </div>
    </div>
  );
};

export default MainDash;