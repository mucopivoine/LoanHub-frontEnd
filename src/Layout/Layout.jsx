
import Search from '../Pages/Search'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Search/>
    <Outlet/>
    </>
    
  )
}

export default Layout