
import Sidebar from '../Components/Sidebar'
import LoanManagement from './LoanManagement'

import DashboardStatsGrid from '../Data/DashboardStatsGrid'

import Newdata from '../Data/NewData'

function Analytics() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* <Search /> */}
      <Sidebar />
      <div className="mx-auto mt-20 ml-36">
        <DashboardStatsGrid/>
        <Newdata/>
      </div>
    </div>
    
  )
}

export default Analytics