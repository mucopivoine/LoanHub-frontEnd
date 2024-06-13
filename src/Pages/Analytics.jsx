
import Sidebar from '../Components/Sidebar'
import LoanManagement from './LoanManagement'

import DashboardStatsGrid from '../Data/DashboardStatsGrid'

import Newdata from '../Data/NewData'
import StatsGrids from '../Components/MainDash/StatsGrids'

function Analytics() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      <Sidebar />
      <div className="mx-auto mt-20 ml-36">
       <StatsGrids/>
       <Newdata/>
      </div>
    </div>
    
  )
}

export default Analytics