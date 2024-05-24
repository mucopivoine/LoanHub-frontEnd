
import Sidebar from '../Components/Sidebar'
import LoanManagement from './LoanManagement'

import DashboardStatsGrid from '../Data/DashboardStatsGrid'
import Search from './Search'

function Analytics() {
  return (
    <div>
        <Sidebar/>

        <Search/>
        <div className='mt-[70px]'>
{/* 
        <div>
          <Search/>
          </div> */}

        <DashboardStatsGrid/>
        <LoanManagement/>
        </div>
        </div>
    
  )
}

export default Analytics