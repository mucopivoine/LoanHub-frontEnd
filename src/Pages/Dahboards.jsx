
import { Outlet } from 'react-router-dom'
import Search from './Search'
function Dahboards() {
  return (
    <>
    <Search/>
 <Outlet/>
 </>
  )
}

export default Dahboards