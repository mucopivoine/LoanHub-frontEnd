import React from 'react'
import Sidemenu from '../Components/Sidemenu'
import DashboardStatsGrid from './NewDash'
import LoanManagement from './LoanManagement'
import Newdata from './NewDash'

function TeacherAnalytics() {
  return (
    <div>
        <Sidemenu/>
        <div className='mt-[70px]'>
        <DashboardStatsGrid/>
       <Newdata/>

        </div>
    </div>
  )
}

export default TeacherAnalytics