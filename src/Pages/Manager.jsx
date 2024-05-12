import React ,{ useState} from 'react'
import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import Sidemenu from '../Components/Sidemenu';

function Manager() {
  
  
  return (
    <>
    
       <Sidemenu/>
      {/* Main content */}
      <div className="ml-64 p-10"> {/* Adjust margin-left to accommodate sidebar width */}
        <h1>Main Content</h1>
        <p>This is where your main content goes.</p>
      </div>
        
        </>
  )
}

export default Manager