import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { FaRegChartBar, FaUser, FaUserFriends, FaChalkboardTeacher, FaHandHoldingUsd, FaDatabase } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

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
          className="fixed top-5 left-5 z-50 bg-gray-800 text-white px-3 py-2 rounded-md"
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>
      )}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isLargeScreen ? 0 : isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 h-full w-64 bg-gray-200 text-black z-40 ${
          isLargeScreen ? '' : 'transform transition-transform'
        }`}
      >
        <nav className="p-4 mt-16 w-full">
          <h1 className="text-center font-bold text-xl">Admin Dashboard</h1>
          <ul className="p-10 space-y-4">
            <li
              className="flex flex-col items-center relative cursor-pointer"
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            >
              <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center mb-2 mr-6">
                <img src="/happy.jpg" alt="User Profile" className="h-full w-full rounded-full object-cover" />
              </div>
              <p className="mr-6 mb-5">Profile</p>

              {isProfileOpen && (
                <div className="absolute top-12 right-0 w-[200px] bg-white shadow-lg rounded-lg">
                  <div className="p-4 text-sm">
                    <p>Name: John Doe</p>
                    <p>Email: johnDoe@gmail.com</p>
                    <p>Phone: 078992900</p>
                  </div>
                </div>
              )}
            </li>

            <li className="flex items-center p-3 rounded-md hover:bg-white hover:text-red-500">
              <FaRegChartBar className="mr-3 w-[20px]" />
              <Link to="/admin/analytics">Analytics</Link>
            </li>
            <li className="flex items-center p-3 rounded-md hover:bg-white hover:text-red-500">
              <FaUser className="mr-3 w-[20px]" />
              <Link to="/admin/viewmanager">Managers</Link>
            </li>
            <li className="flex items-center p-3 rounded-md hover:bg-white hover:text-red-500">
              <FaChalkboardTeacher className="mr-3 w-[20px]" />
              <Link to="/admin/viewteachers">Teachers</Link>
            </li>
            <li className="flex items-center p-3 rounded-md hover:bg-white hover:text-red-500">
              <FaHandHoldingUsd className="mr-3 w-[20px]" />
              <Link to="/admin/allLoans">Loans Requests</Link>
            </li>
            <li className="flex items-center p-3 rounded-md hover:bg-white hover:text-red-500">
              <FaDatabase className="mr-3 w-[20px]" />
              <Link to="/admin/database">Database</Link>
            </li>
          </ul>
        </nav>
      </motion.div>
      <div className={`relative ${isLargeScreen ? 'ml-64' : ''}`}>
        <Outlet />
      </div>
    </>
  );
}

export default Sidebar;
