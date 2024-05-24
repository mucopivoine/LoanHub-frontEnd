import { useState } from 'react';
import { FaRegChartBar, FaTachometerAlt, FaUser, FaUserFriends } from 'react-icons/fa';
import { IoMdClose, IoMdExit, IoMdMenu } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed lg:ml-24 top-5 left-5 z-50 bg-gray-800 text-white px-3 py-2 rounded-md">
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: isOpen ?  0: -300 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full lg:w-64 bg-red-400">
        <nav className="p-4 mt-16 w-full">
          <h1 className="text-center font-bold text-2xl">Admin Dashboard</h1>
          <ul className="p-10 space-y-4">
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaTachometerAlt className="mr-3 w-[20px]"/>
              <Link to="/admin/maindash">Dashboard</Link>
            </li>
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaUser className="mr-3 w-[20px]"/>
              <Link to="/admin/viewmanager">Managers</Link>
            </li>
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaUserFriends className="mr-3 w-[20px]"/>
              <Link to="/admin/viewteachers">Teachers</Link>
            </li>
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaUserFriends className="mr-3 w-[20px]"/>
              <Link to="/admin/database">Database</Link>
            </li>
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaRegChartBar className="mr-3 w-[20px]"/>
              <Link to="/admin/analytics">Analytics</Link>
            </li>
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <IoMdExit className="mr-3 w-[20px]"/>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </nav>
      </motion.div>
      <div className="lg:ml-64">
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
