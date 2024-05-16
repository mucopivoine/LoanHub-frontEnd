import React , {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';

function  Sidemenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <button onClick={toggleSidebar} className="fixed lg:ml-24 top-5 left-5 z-50 bg-gray-800 text-white px-3 py-2 rounded-md ">
        {isOpen ? <IoMdMenu /> :  <IoMdClose />}
      </button>
      
      <motion.div

       

        initial={{ x: 300 }}

        animate={{ x: isOpen ? -300 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-[#FF8C8C] text-black  z-40">
        <nav className="p-4 mt-16 w-full">
          <ul className='p-10'>
            <li className='mb-5 rounded-md text-center p-3 hover:bg-white hover:border-2 hover:text-red-500'>
              <Link to="/">Home</Link>
            </li>
            <li className='mb-5 rounded-md text-center p-3 hover:bg-white hover:border-2 hover:text-red-500' >
              <Link to="/layout/viewdata">Account</Link>
            </li>
            <li className='mb-5 rounded-md text-center p-3 hover:bg-white hover:border-2 hover:text-red-500'>
              <Link to="/layout/teacher"> Loan Details</Link>
            </li>
          </ul>
        </nav>
      </motion.div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}
export default Sidemenu