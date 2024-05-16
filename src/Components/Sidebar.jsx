import React , {useState} from 'react'
import { IoIosAnalytics, IoMdClose, IoMdExit } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';
import { FaRegChartBar, FaTachometerAlt, FaUser } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { RadialBarChart } from 'recharts';

function  Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <button onClick={toggleSidebar} className="fixed lg:ml-24 top-5 left-5 z-50 bg-gray-800 text-white px-3 py-2 rounded-md ">
        {isOpen ? <IoMdMenu /> :  <IoMdClose />}
      </button>
      
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpen ? -300 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-gray-100 text-black  z-40">
        <nav className="p-4 mt-16 w-full">
          <ul className='p-10'>
            <div className='flex items-center'>
            <FaTachometerAlt className='w-[30px]'/>
            <li className=' rounded-md  p-3 hover:bg-[#FF8C8C] hover:text-white hover:border-2 '>
              <Link to="/admin/maindash">Dashboard</Link>
            </li>
            
            </div>
            <div className='flex items-center'>
              <FaUser className='w-[30px]'/>
            <li className=' rounded-md  p-3 hover:bg-[#FF8C8C] hover:text-white ' >
              <Link to="/admin/viewmanager">Managers</Link>
            </li>
            </div>
            <div className='flex items-center' >
              <FaUserGroup className='w-[30px]'/>
            <li className='rounded-md  p-3 hover:bg-[#FF8C8C] hover:text-white '>
              <Link to="/admin/viewteacher"> Teachers</Link>
            </li>
            </div>
            <div className='flex items-center'>
              <FaRegChartBar className='w-[30px]'/>
            <li className='rounded-md p-3 hover:bg-[#FF8C8C] hover:text-white '>
              <Link to="/admin/analytics"> Analytics</Link>
            </li>
            </div>
            <div className='flex items-center'>
            <IoMdExit className='w-[30px]'/>
            <li className=' rounded-md  p-3 hover:bg-[#FF8C8C] hover:text-white '>
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
export default Sidebar