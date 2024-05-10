
import Main from "./Main"
import Home from "./Home"
import { Outlet } from "react-router-dom"

import End from "./End"
import Services from "./Services"
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