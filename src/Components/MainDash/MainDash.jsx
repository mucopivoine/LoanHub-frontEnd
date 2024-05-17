import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import "./MainDash.css";
import Sidemenu from "../Sidemenu";
import LoanManagement from "../../Pages/LoanManagement";
import Sidebar from "../Sidebar";
import TableComponent from "../../Pages/Tablecomponent";
import ManageLoans from "../ManageLoans";
const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <div className="">
      <div className="">
      <Sidebar/>
      </div>
      <div className="">
      <Cards />
      <div className="mb-14 gap-0" >
      <LoanManagement/>
      </div>
      <div>
      <TableComponent/>
      </div>
      {/* <div>
        <ManageLoans/>
      </div> */}
      </div>
      </div>
    </div>
  );
};

export default MainDash;