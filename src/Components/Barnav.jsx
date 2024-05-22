import  { useState} from 'react'
import { motion } from 'framer-motion';
import { IoMdClose, IoMdExit, IoMdMenu } from 'react-icons/io';
import { FaRegChartBar, FaTachometerAlt, FaUser, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Barnav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => {
    setIsOpen(!isOpen);
    }
      return (
        <>
       
          <button onClick={toggleSidebar} className="fixed lg:ml-24 top-5 left-5 z-50 bg-gray-800 text-white px-3 py-2 rounded-md ">
            {isOpen ? <IoMdMenu /> :  <IoMdClose />}
          </button>
          
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: isOpen ? -300 : 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-red-500 text-black  z-40">
            <nav className="p-4 mt-16 w-full">
              <ul className='p-10'>
                <div className='flex items-center'>
                <FaTachometerAlt className='w-[30px]'/>
                <li className=' rounded-md  p-3 hover:bg-white hover:text-red-500 hover:border-2 '>
                  <Link to="/barnav/managerdash">Dashboard</Link>
                </li>
                
                </div>
                <div className='flex items-center'>
                  <FaUser className='w-[30px]'/>
                <li className=' rounded-md  p-3 hover:bg-white hover:text-red-500 hover:border-2 ' >
                  <Link to="/barnav/teachers">Teachers</Link>
                </li>
                </div>
                <div className='flex items-center' >
                  <FaUserFriends className='w-[30px]'/>
                <li className='rounded-md  p-3 hover:bg-white hover:text-red-500 hover:border-2  '>
                  <Link to="/barnav/loans"> Loans</Link>
                </li>
                </div>
                <div className='flex items-center'>
                  <FaRegChartBar className='w-[30px]'/>
                <li className='rounded-md p-3 hover:bg-white hover:text-red-500 hover:border-2 '>
                  <Link to="/barnav/manageAnalytics"> Analytics</Link>
                </li>
                </div>
                <div className='flex items-center'>
                <IoMdExit className='w-[30px]'/>
                <li className=' rounded-md  p-3 hover:bg-white hover:text-red-500 hover:border-2 '>
                  <Link to="/"> Logout</Link>
                </li>
                
                </div>
              </ul>
            </nav>
          </motion.div>
          <div>
         <Outlet/>
         </div>
          </>  
  )
}

export default Barnav