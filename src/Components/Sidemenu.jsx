import React , {useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function  Sidemenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
      <button onClick={toggleSidebar} className="fixed top-5 left-5 z-50 bg-gray-800 text-white px-3 py-2 rounded-md ml-10">
        {isOpen ? <IoMdMenu /> :  <IoMdClose />}
      </button>
      
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? -300 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 h-full w-64 bg-red-200 text-black z-40"
      >
        <nav className="p-4 mt-16">
          <ul className='p-10'>
            <li className='mb-5'>
              <Link to="/">Home</Link>
            </li>
            <li className='mb-5' >
              <Link to="/layout/viewdata">Account</Link>
            </li>
            <li className='mb-5'>
              <Link to="/layout/teacher"> Loan Details</Link>
            </li>
          </ul>
        </nav>
      </motion.div>
    </>
  )
}

export default Sidemenu