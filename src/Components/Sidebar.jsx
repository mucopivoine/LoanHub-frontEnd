
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
  Sidebar,
} from "lucide-react";
import { motion } from "framer-motion";

import RightArrowIcon from "./../assets/icons/rightArrow.svg";
import Dashboard from "./Dashboard";

const variants = {
  // todo: change expanded to 30% and nonexpanded to %6
  expanded: { width: "220px" },
  nonexpanded: { width: "60px" },
};

const navLinks = [
  {
    link: "Dashboard",
    icon: LayoutDashboard,
    path:"dashboard",
  },
  {
    link: "Activity",
    icon: Clock4Icon,
    path:'/activity',
  },
 
  {
    link: "Transactions",
    icon: ArrowLeftRightIcon,
    
  },
  
];

function Sidebar() {
  
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 768) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    <div className="flex">
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
        (isExpanded ? " px-10" : " px-2 duration-500")
      }
    >
      <div className="logo-div flex space-x-4 items-center text-xl font-bold">
       
        <span className={!isExpanded ? "hidden" : "block"}>Admin data</span>
      </div>

      <div className="flex flex-col space-y-8 mt-12">
        {navLinks.map((item, index) => (
          <div className="nav-links w-full" key={index}>
            <Link to={item.path}
              className={
                "flex space-x-3 w-full p-2 rounded " +
                (activeIndex === index
                  ? "bg-[#FF8C8C] text-white"
                  : " text-black") +
                (!isExpanded ? " pl-4" : "")
              }
            >
              <item.icon className="md:w-6 w-4" />
              <span className={!isExpanded ? "hidden" : "block"}>
                {item.link}
              </span>
            </Link>
          </div>
        ))}
      </div>
      
    </motion.div>
    <div className="w-[90vw]">
        <Dashboard/>
    </div>
    </div>
    </>


import { AiFillDashboard } from "react-icons/ai";
import { IoIosCard } from "react-icons/io";
import { MdOutlinePayments } from "react-icons/md";
import { MdOutlineAccountBalance } from "react-icons/md";
import { HiBanknotes } from "react-icons/hi2";
import { FaPeopleArrows } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { SiWebmoney } from "react-icons/si";
const Sidebar = () => {
  return (
    <div className=' h-screen bg-indigo-600 dark:bg-slate-950/50  shadow-lg '>
      <div className=' flex flex-col gap-3 w-full text-slate-300 h-full justify-between'>
        <div className='flex flex-col gap-10 px-4 mt-4'>
          <div className='flex items-center justify-center gap-2'>
            <SiWebmoney className='text-indigo-900 dark:text-white text-xl md:text-4xl'/>
            <div className=' hidden md:flex font-bold '>FinaApp</div>
          </div>
          <div className='flex flex-col gap-5 text-md sm:text-xs md:text-sm lg:text-lg'>
            <div className='flex items-center  gap-2'>
              <div><AiFillDashboard/></div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer '>Dashboard</div>
            </div>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><IoIosCard/></div>
              <div className='hidden sm:flex'>Cards</div>
            </div>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><MdOutlinePayments/></div>
              <div className='hidden sm:flex'>Payments</div>
            </div>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><MdOutlineAccountBalance/></div>
              <div className='hidden sm:flex'>Accounts</div>
            </div>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><HiBanknotes/></div>
              <div className='hidden sm:flex'>Loans</div>
            </div>
            <div className='flex items-center  gap-2 hover:text-slate-100 cursor-pointer'>
              <div><FaPeopleArrows/></div>
              <div className='hidden sm:flex'>Beneficiary</div>
            </div>
          </div>
        </div>
        <div className='flex items-center text-md sm:text-xs md:text-sm lg:text-lg px-4 mb-4 gap-2 hover:text-slate-100 cursor-pointer'>
          <div><IoSettingsOutline/></div>
          <div className='hidden sm:flex'>Settings</div>
        </div>
      </div>
    </div>

  );
}

export default Sidebar;