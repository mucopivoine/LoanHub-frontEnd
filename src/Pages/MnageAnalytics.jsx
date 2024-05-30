
import Sidemenu from '../Components/Sidemenu'
import DashboardStatsGrid from './NewDash'
import LoanManagement from './LoanManagement'
import Newdata from '../Data/NewData'
import Search from './Search'
import Barnav from '../Components/Barnav'

function ManagerAnalytics() {
  return (
    <div className="relative min-h-screen bg-gray-100">
    <Search />
    <Barnav />
    <div className="mx-auto mt-20">
     <DashboardStatsGrid/>
      <Newdata/>
    </div>
  </div>
  )
}

export default ManagerAnalytics