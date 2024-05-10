// import React from 'react'
// import Home from "./Home"
// import Main from "./Main"
// import About from "./About"
import Home from "./Home"
import End from "./End"
import Services from "./Services"
import { Outlet } from "react-router-dom"


function Call() {
  return (
    <div>
        <Home/>
        <Outlet/>
        <Services/>
        <End/>
        
    </div>
  )
}

export default Call