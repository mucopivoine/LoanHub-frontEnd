import axios from 'axios';
import { Cookie } from 'lucide-react';
import { useState, useEffect } from 'react';
import { FaSearch, FaRegBell, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { deleteCookie } from '../utils/cook';

function Search({ messages = [] }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchFixed, setIsSearchFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSearchFixed(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.clear()
    deleteCookie('jwt')
    window.location.pathname="/auth/signin"

  };

  return (
    <div
      className={`flex fixed mb-10 sm:w-[90%] lg:w-[81%] sm:ml-[70px] right-0 justify-between top-0 bg-gray-100 shadow-lg rounded-lg ${
        isSearchFixed ? 'z-50' : ''
      }`}
    >
      <div className="flex items-center rounded-[5px]">
       <div className="flex items-center italic ">
              <img className="h-12 w-12" src="/money.png" alt="Money Icon" />
              <h1 className="ml-2 text-xl font-playfair ">Umwalimu Loan Hub</h1>
            </div>
      </div>
      <div className="flex items-center gap-[15px] relative">
        
          <div className="relative">
            <FaEnvelope />
            {messages.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
                {messages.length}
              </span>
            )}
          </div>
        <button className='p-3 m-2 rounded-md text-md hover:bg-white hover:text-red-500' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Search;
