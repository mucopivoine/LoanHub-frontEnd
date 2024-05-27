
import { useState } from 'react';
import { FaRegChartBar,  FaUser, FaDatabase, FaHandHoldingUsd, FaChalkboardTeacher } from 'react-icons/fa';
import { IoMdClose,  IoMdMenu } from 'react-icons/io';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar toggle button visible on small screens */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-5 left-5 z-50 bg-gray-800 text-white px-3 py-2 rounded-md">
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>
      <div className={`bg-red-400 h-[100vh] fixed left-0 top-0 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <nav className="p-4 mt-16 w-full">
          <h1 className="text-center font-bold text-2xl">Admin</h1>
          <h1 className="text-center font-bold text-2xl">Dashboard</h1>
          <ul className="p-10 space-y-4">
            {/* User Profile Component */}
            <li className="flex flex-col items-center relative cursor-pointer" onClick={() => setIsProfileOpen(!isProfileOpen)}>
              <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center mb-2 mr-6">
                <img src="/happy.jpg" alt="User Profile" className=" h-full w-full rounded-full object-cover" />
              </div>
              <p className='mr-6'>User profile</p>
              {isProfileOpen && (
                <div className="absolute top-[100px] right-0 w-[200px] bg-white shadow-lg rounded-lg">
                  <div className="p-4 text-sm">
                    <p>Name: John Doe</p>
                    <p>Email: johnDoe@gmail.com</p>
                    <p>Phone: 078992900</p>
                  </div>
                </div>
              )}
            </li>

            {/* Analytics Section */}
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaRegChartBar className="mr-3 w-[20px]" />
              <Link to="/admin/analytics">Analytics</Link>
            </li>
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaUser className="mr-3 w-[20px]" />
              <Link to="/admin/viewmanager">Managers</Link>
            </li>
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaChalkboardTeacher className="mr-3 w-[20px]" />
              <Link to="/admin/viewteachers">Teachers</Link>
            </li>
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaHandHoldingUsd className="mr-3 w-[20px]" />
              <Link to="/admin/allLoans">Loans Requests</Link>
            </li>
            <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaDatabase className="mr-3 w-[20px]" />
              <Link to="/admin/database">Database</Link>
            </li>
            {/* <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <FaTachometerAlt className="mr-3 w-[20px]" />
              <Link to="/admin/maindash">Dashboard</Link>
            </li> */}
            {/* <li className="flex items-center p-3 hover:bg-white hover:text-red-500 rounded-md">
              <IoMdExit className="mr-3 w-[20px]" />
              <Link to="/">Logout</Link>
            </li> */}
          </ul>
        </nav>
      </div>
      <div className="relative lg:ml-64">
        <Outlet />
      </div>
    </>
  );
};

export default Sidebar;
