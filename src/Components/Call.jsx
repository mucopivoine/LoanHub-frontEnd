
// import Main from "./Main"
import Home from "./Home"
import { Outlet } from "react-router-dom"
import End from "./End"


function Call() {
  return (
    <div>
        <Home/>
        <Outlet/>
        <End/>
    </div>
  )
}

export default Call