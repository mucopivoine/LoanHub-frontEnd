// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Call from './Components/Call'
// import Layout from './Layout/Layout'
// import Admin from './Pages/AdminDash/Admin'

import About from './Components/About'
// 
import Main from './Components/Main'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Call/>}>
          <Route path="/" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        </Route>
        {/* <Route path="/main" element={<Main/>}/>
       
        <Route path="/" element={<Layout/>}>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/manager" element={<Manager/>}/>
          <Route path="/teacher" element={<Teacher/>}/>
          </Route> */}
      </Routes>
    </Router>

    </>
  )
}

export default App