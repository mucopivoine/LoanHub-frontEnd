import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Admin from './Pages/AdminDash/Admin'
import Manager from './Pages/ManagerDash/Manager'
import Teacher from './Pages/TeacherDash/Teacher'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/manager" element={<Manager/>}/>
          <Route path="/teacher" element={<Teacher/>}/>
          </Route>
      </Routes>
    </Router>

    </>
  )
}

export default App