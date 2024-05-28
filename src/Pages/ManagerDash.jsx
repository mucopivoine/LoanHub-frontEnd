// import { Outlet } from "react-router-dom"
import Barnav from "../Components/Barnav"
// import NewData from '../Data/NewData'
// import Loans from "./Loans"
// import Teachers from "./Teachers"
import Search from "./Search"
import LoanManagement from "./LoanManagement"
import DashboardStatsGrid from "./NewDash"

function ManagerDash() {
  return (
    <div className="flex mt-[100px]">
      <div className="fixed">
        <Barnav />
      </div>
      <div className=""> 
        <Search />
        <DashboardStatsGrid />
        <LoanManagement />
      </div>
    </div>
  )
}

export default ManagerDash