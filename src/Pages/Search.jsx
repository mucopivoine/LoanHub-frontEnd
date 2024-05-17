import  { useState } from 'react';
import { FaSearch, FaRegBell, FaEnvelope } from 'react-icons/fa';

function Search() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex justify-between mb-12 px-4 py-2 bg-gray-100 shadow-lg rounded-lg ">
      {/* Search Input Section */}
      <div className="flex items-center rounded-[5px] lg:ml-[300px] ">
        <input
          type="text"
          className="bg-[#F8F9FC] h-[40px] outline-none pl-[13px] w-[350px] rounded-[5px] placeholder:text-[14px] leading-[20px] font-normal"
          placeholder="Search for..."
        />
        <div className="bg-purple-400 h-[40px] w-[40px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px] ">
          <FaSearch color="white"  />
        </div>
      </div>

      {/* User Profile Section (Aligned to the Left) */}
      <div className="flex items-center gap-[15px] relative" onClick={() => setIsProfileOpen(!isProfileOpen)}> {/* Add onClick handler to toggle profile visibility */}
        <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
          <FaRegBell />
          <FaEnvelope />
        </div>
        <div className="flex items-center relative">
          <p>User profile</p>
          <div className="h-[50px] w-[50px] rounded-full  cursor-pointer flex items-center justify-center ml-[15px]">
            <img
              src="/happy.jpg"
              alt="User Profile"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          {isProfileOpen && (
            <div className="absolute top-[50px] left-0 w-[200px] bg-white shadow-lg rounded-lg">
              <div className="p-4">
                <p>Name: John Doe</p>
                <p>Email: j</p>
                <p>Phone: 12</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;