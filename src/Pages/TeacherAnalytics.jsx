
import Sidemenu from '../Components/Sidemenu'
import DashboardStatsGrid from './NewDash'
import LoanManagement from './LoanManagement'

function TeacherAnalytics() {
  return (
    <div>
        <Sidemenu/>
        <div className='mt-[70px]'>
        <DashboardStatsGrid/>
        <LoanManagement/>

        </div>
    </div>
  )
}

export default TeacherAnalytics