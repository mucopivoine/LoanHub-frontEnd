
import Sidemenu from '../Components/Sidemenu'
import DashboardStatsGrid from './NewDash'
import LoanManagement from './LoanManagement'
import Newdata from '../Data/NewData'
import Search from './Search'
import Barnav from '../Components/Barnav'
import NewDash from './NewDash'

function ManagerAnalytics() {
  return (
    <div className="relative  bg-gray-100">
    <Search />
    <Barnav />
    <div className="mt-20">
     <NewDash/>
     
    </div>
  </div>
  )
}

export default ManagerAnalytics