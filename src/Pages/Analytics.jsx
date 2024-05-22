
import Sidebar from '../Components/Sidebar'
import LoanManagement from './LoanManagement'
import Cards from '../Components/Cards/Cards'
import DashboardStatsGrid from '../Data/DashboardStatsGrid'

function Analytics() {
  return (
    <div>
        <Sidebar/>
        <div className='mt-[70px]'>
        <DashboardStatsGrid/>
        <div className='w-[100%]'>
        <LoanManagement/>
        </div>
        </div>
    </div>
  )
}

export default Analytics