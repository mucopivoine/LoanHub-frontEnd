import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoMdClose, IoMdExit, IoMdMenu } from 'react-icons/io';
import { FaRegChartBar, FaTachometerAlt, FaUser, FaUserFriends } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Barnav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!isLargeScreen && (
        <button
          onClick={toggleSidebar}
          className="fixed lg:ml-24 top-5 left-5 z-50 bg-gray-800 text-white px-3 py-2 rounded-md "
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      )}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isLargeScreen ? 0 : isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full w-64 bg-red-400 text-black z-40 ${
          isLargeScreen ? '' : 'transform transition-transform'
        }`}
      >
        <nav className="p-4 mt-16 w-full">
          <h1 className="text-center font-bold text-xl">Manager Dashboard</h1>
          <ul className="p-10">
            <li className="flex items-center p-3 rounded-md gap-2 text-lg mb-5 hover:bg-white hover:text-red-500 hover:border-2">
              <FaTachometerAlt className="w-[20px]" />
              <Link to="/barnav/profile">Profile</Link>
            </li>
            <li className="flex items-center p-3 rounded-md gap-2 text-lg mb-5 hover:bg-white hover:text-red-500 hover:border-2">
              <FaUser className="w-[20px]" />
              <Link to="/barnav/teachers">Teachers</Link>
            </li>
            <li className="flex items-center p-3 rounded-md gap-2 text-lg mb-5 hover:bg-white hover:text-red-500 hover:border-2">
              <FaUserFriends className="w-[20px]" />
              <Link to="/barnav/loans">Loans</Link>
            </li>
            <li className="flex items-center p-3 rounded-md gap-2 text-lg mb-5 hover:bg-white hover:text-red-500 hover:border-2">
              <FaRegChartBar className="w-[20px]" />
              <Link to="/barnav/manageAnalytics">Analytics</Link>
            </li>
            {/* <li className="flex items-center py-5 rounded-md gap-2 text-lg mb-5 p-2 hover:bg-white hover:text-red-500 hover:border-2">
              <IoMdExit className="w-[30px]" />
              <Link to="/">Logout</Link>
            </li> */}
          </ul>
        </nav>
      </motion.div>
      <div className={`${isLargeScreen ? 'ml-64' : ''}`}>
        <Outlet />
      </div>
    </>
  );
}

export default Barnav;
