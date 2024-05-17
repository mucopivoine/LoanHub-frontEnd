import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";


// import RightArrowIcon from "./../assets/icons/rightArrow.svg";
// import Dashboard from "./Dashboard";




const variants = {
  // todo: change expanded to 30% and nonexpanded to %6
  expanded: { width: "220px" },
  nonexpanded: { width: "60px" },
};

const navLinks = [
  {
    link: "Dashboard",
    icon: LayoutDashboard,
    
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

function Navbar() {
  
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
    {/* <div className="w-[90vw]">
        <Dashboard/>
    </div> */}
    </div>
    </>
  );
}

export default Navbar;