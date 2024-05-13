// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import Admin from './Pages/AdminDash/Admin'
import Manager from './Pages/ManagerDash/Manager'
import Teacher from './Pages/TeacherDash/Teacher'
import AuthRoute from './Pages/AuthRoute'

import SignUp from './Components/SignUp'
import Forgot from './Components/Forgot'
import Login from './Components/Login'
import Reset from './Components/Reset'
import Call from './Components/Call'
import About from './Components/About'

import OtpInput from './Components/OtpInput'
import Otpconfirm from './Components/Otpconfirm'
import Main from './Components/Main'
import Services from './Components/Services'
import Contacts from './Components/Contacts'




function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Call/>}>
           <Route path="/" element={<Main/>}/>
           <Route path="/aboutUs" element={<About/>}/>
           <Route path="/contact" element={<Contacts/>}/>
           <Route path="/services" element={<Services/>}/>
           <Route path="/auth" element={<AuthRoute/>}>
            <Route path="signin" element={<Login/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="forgot" element={<Forgot/>}/>
            <Route path="reset" element={<Reset/>}/>
            <Route path="otpinput" element={<OtpInput/>}/>
            <Route path="otpconfirm" element={<Otpconfirm/>}/></Route>
         </Route>
      <Route path="/" element={<Layout/>}>
          <Route path="admin" element={<Admin/>}/>
          <Route path="manager" element={<Manager/>}/>
          <Route path="teacher" element={<Teacher/>}/>
          
         </Route>

      </Routes>
    </Router>
  )
}
       
          
 

export default App