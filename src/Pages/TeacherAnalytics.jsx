import React from 'react'
import Sidemenu from '../Components/Sidemenu'
import DashboardStatsGrid from './NewDash'
import LoanManagement from './LoanManagement'
import Newdata from '../Data/NewData'
import Search from './Search'

function TeacherAnalytics() {
  return (
    <div className="relative min-h-screen bg-gray-100">
    <Search />
    <Sidemenu />
    <div className="mx-auto mt-20 ml-36">
     <DashboardStatsGrid/>
      <Newdata/>
    </div>
  </div>
  )
}

export default TeacherAnalytics