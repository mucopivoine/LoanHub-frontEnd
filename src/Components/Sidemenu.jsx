import React, { useState, useEffect } from 'react';
import { FaWpforms, FaUser, FaHandHoldingUsd } from 'react-icons/fa';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sidemenu = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);
  const [teacher, setTeacher] = useState(null);
  const navigate = useNavigate();

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
    const fetchTeacherData = async () => {
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
    if (teacher) {
      navigate(`/layout/teacherprofile/${teacher._id}`);
    }
  }, [teacher, navigate]);

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
        <nav className="p-4 mt-16 w-full">
          <h1 className="text-center font-bold text-xl">Teacher Dashboard</h1>
          <ul className="p-10 space-y-4">
            <li className="flex items-center p-2 rounded-md gap-2 text-lg mb-5 cursor-pointer hover:bg-white hover:text-red-500 hover:border-2">
              <FaUser className="w-[20px]" />
              <Link to={`/layout/teacherprofile/${id}`}>Profile</Link>
            </li>
            <li className="flex items-center p-2 rounded-md gap-2 text-lg mb-5 hover:bg-white hover:text-red-500 hover:border-2">
              <FaHandHoldingUsd className="w-[20px]" />
              <Link to="/layout/teacherloans">Loans</Link>
            </li>
            <li className="flex items-center p-2 rounded-md gap-2 text-lg mb-5 hover:bg-white hover:text-red-500 hover:border-2">
              <FaWpforms className="w-[20px]" />
              <Link to="/layout/viewdata">Inquiry</Link>
            </li>
            <li className="flex items-center p-2 rounded-md gap-2 text-lg mb-5 hover:bg-white hover:text-red-500 hover:border-2">
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
