
import Sidebar from '../Components/Sidebar'
import LoanManagement from './LoanManagement'
import Cards from '../Components/Cards/Cards'
import DashboardStatsGrid from '../Data/DashboardStatsGrid'

import NewDash from '../Pages/NewDash'
import { Search } from 'lucide-react'

function Analytics() {
  return (
    <div>
        <Sidebar/>
        <div>
          <Search/>
          </div>
        <DashboardStatsGrid/>
        <LoanManagement/>
        </div>
    
  )
}

export default Analytics