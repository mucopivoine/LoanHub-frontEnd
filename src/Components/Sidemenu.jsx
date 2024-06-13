import React, { useState, useEffect } from 'react';
import { FaWpforms, FaUser, FaHandHoldingUsd } from 'react-icons/fa';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sidemenu = () => {
  const { id } = useParams(); 
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [teacher, setTeacher] = useState(null);
  const navigate = useNavigate();

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth >= 1024);
  };

  const cookie = document.cookie.split('jwt=')[1];

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchTeacherData = async (id) => {
      try {
        const response = await axios.get(`https://umwarimu-loan-hub-api.onrender.com/api/teacher/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`,
          },
          withCredentials: true,
        });
        setTeacher(response.data.teacher);
      } catch (error) {
        console.error('Error fetching teacher data:', error);
      }
    };

    if (id) {
      fetchTeacherData();
    }
  }, [id, cookie]);

  useEffect(() => {
    if (isProfileOpen) {
      fetchManagerData();
    }
  }, [isProfileOpen]);
  return (
    <>
      {!isLargeScreen && (
        <button
          onClick={toggleSidebar}
          className="fixed lg:ml-24 top-5 left-5 z-50 bg-gray-800 text-white px-3 py-2 rounded-md"
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
        <nav className="p-4 w-full">
          <h1 className="text-center font-bold text-xl">Teacher Dashboard</h1>
          <ul className="p-10 space-y-4">
          <li
              className="flex flex-col items-center relative cursor-pointer"
              onMouseEnter={() => setIsProfileOpen(true)}
              onMouseLeave={() => setIsProfileOpen(false)}
            />
               <div className="h-[70px] w-[70px] rounded-full flex items-center justify-center ml-5 p-3 gap-2 text-lg">
                <img src="/happy.jpg" alt="User Profile" className="h-full w-full rounded-full object-cover" />
              </div>
            <li className="flex items-center p-2 rounded-md gap-2 text-lg mb-5 hover:text-red-500">
              <FaHandHoldingUsd className="w-[20px]" />
              <Link to="/layout/teacherloans">Loans</Link>
            </li>
            <li className="flex items-center p-2 rounded-md gap-2 text-lg mb-5 hover:text-red-500">
              <FaWpforms className="w-[20px]" />
              <Link to="/layout/viewdata">Inquiry</Link>
            </li>
            <li className="flex items-center p-2 rounded-md gap-2 text-lg mb-5 hover:text-red-500">
              <FaUser className="w-[20px]" />
              <Link to="/layout/teachercontact">Reach us</Link>
            </li>
          </ul>
        </nav>
      </motion.div>
      <div className={`${isLargeScreen ? 'ml-64' : ''}`}>
        <Outlet />
      </div>
    </>
  );
};

export default Sidemenu;
