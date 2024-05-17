import { Outlet } from "react-router-dom"
import Barnav from "../Components/Barnav"
import NewData from '../Data/NewData'
import Loans from "./Loans"
import Teachers from "./Teachers"

function ManagerDash() {
  return (
    <>
   <div>
    <Barnav/>
   </div>
   <div>
    <NewData/>
    <Teachers/>
   </div>
   </>
  )
}

export default ManagerDash