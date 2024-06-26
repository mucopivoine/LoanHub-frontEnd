
import Sidebar from '../Components/Sidebar'
import LoanManagement from './LoanManagement'

import DashboardStatsGrid from '../Data/DashboardStatsGrid'

import Newdata from '../Data/NewData'
import StatsGrids from '../Components/MainDash/StatsGrids'
import NewGraph from '../Components/MainDash/NewGraph'
function Analytics() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar />
      <div className="mx-auto mt-20 ">
       <StatsGrids/>
       <Newdata/>
      </div>
    </div>
    
  )
}

export default Analytics