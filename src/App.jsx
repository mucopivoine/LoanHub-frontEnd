import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Layout/Layout'

import Manager from './Pages/Manager'
import Teacher from './Pages/Teacher'
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



import ViewDataForm from './Pages/ViewData'
import Logout from './Components/Logout'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Dashboards from './Pages/Dahboards'


function App() {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Call/>}>
           <Route path="/" element={<Main/>}/>

           <Route path="/about" element={<About/>}/>
      <Route path="/auth" element={<AuthRoute/>}>

           <Route path="/aboutUs" element={<About/>}/>
           <Route path="/contact" element={<Contacts/>}/>
           <Route path="/services" element={<Services/>}/>
           <Route path="/auth" element={<AuthRoute/>}>

            <Route path="signin" element={<Login/>}/>
            <Route path="signup" element={<SignUp/>}/>
            <Route path="forgot" element={<Forgot/>}/>
            <Route path="reset" element={<Reset/>}/>
            <Route path="otpinput" element={<OtpInput/>}/>
            <Route path="otpconfirm" element={<Otpconfirm/>}/>
            <Route path="logout" element={<Logout/>}/></Route>
         </Route>
      <Route path="/layout" element={<Layout/>}>
          <Route path="manager" element={<Manager/>}/>

            <Route path="teacher" element={<Teacher/>}/>
            <Route path="viewdata" element={<ViewDataForm/>}/>

            </Route>
            <Route path="/admin" element={<Dashboards/>}>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="navbar" element={<Navbar/>}/>
            </Route>

        
          
         </Route>


      </Routes>
    </Router>
  )
}
       
          
 

export default App