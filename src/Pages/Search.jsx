import { useState, useEffect } from 'react';
import { FaSearch, FaRegBell, FaEnvelope } from 'react-icons/fa';
// import Logout from '../Components/Logout';
import { Link } from 'react-router-dom';
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
  return (
    <div
      className={`flex fixed mb-10 sm:w-[90%] lg:w-[82%] sm:ml-[70px] right-0 justify-between top-0 bg-gray-100 shadow-lg rounded-lg ${
        isSearchFixed ? 'z-50' : ''
      }`}
    >
      <div className="flex items-center rounded-[5px]">
        <input
          type="text"
          className="bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] lg:ml-[40px] font-normal"
          placeholder="Search for..."
        />
        <div className="bg-gray-400 h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
          <FaSearch color="white" />
        </div>
      </div>
      <div className="flex items-center gap-[15px] relative">
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
          <FaRegBell />
          <div className="relative">
            <FaEnvelope />
            {messages.length > 0 && (
              <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full h-5 w-5 text-xs flex items-center justify-center">
                {messages.length}
              </span>
            )}
          </div>
        </div>
        {/* <div
          className="flex items-center relative z-10 cursor-pointer"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <p>User profile</p>
          <div className="h-[50px] w-[50px] rounded-full flex items-center justify-center ml-[15px]">
            <img src="/happy.jpg" alt="User Profile" className="h-full w-full rounded-full object-cover" />
          </div>
          {isProfileOpen && (
            <div className="absolute top-[60px] right-0 w-[200px] bg-white shadow-lg rounded-lg">
              <div className="p-4 text-sm">
                <p>Name: John Doe</p>
                <p>Email: johnDoe@gmail.com</p>
                <p>Phone: 078992900</p>
                {messages.length > 0 && (
                  <div className="mt-4">
                    <h4 className="font-semibold">Messages:</h4>
                    <ul className="list-disc list-inside">
                      {messages.map((msg, index) => (
                        <li key={index}>{msg}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div> */}
       <Link to="/auth/logout" ><button className='p-3 m-2 rounded-md text-md hover:bg-white hover:text-red-500'>Logout</button></Link>
      </div>
    </div>
  );
}
export default Search;







