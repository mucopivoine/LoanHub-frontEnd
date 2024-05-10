// import React from 'react'
// import Home from "./Home"
import Main from "./Main"
import Home from "./Home"
import { Outlet } from "react-router-dom"

function Call() {
  return (
    <div>
        <Home/>
        <Outlet/>
        
    </div>
  )
}

export default Call