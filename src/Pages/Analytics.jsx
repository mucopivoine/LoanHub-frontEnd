
import Sidebar from '../Components/Sidebar'
import LoanManagement from './LoanManagement'

import DashboardStatsGrid from '../Data/DashboardStatsGrid'
import Search from './Search'

function Analytics() {
  return (
    <div>
        

        <Search className=""/>
        <Sidebar/>
        <div className=''>
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