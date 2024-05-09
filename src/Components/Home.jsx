// import React from 'react';

import { Link } from "react-router-dom";



function Home() {
  return (
    <div>
      <header className="bg-white text-black">
        
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img className="h-12 w-16" src="/money.png" alt="Money Icon" />
              <h1 className="ml-2 text-3xl font-bold font-poppins">Umwalimu Loan Hub</h1>
            </div>

            <nav className="hidden md:flex gap-8 text-lg">
              <a className="hover:text-red-500" href="/">
                Home
              </a>
              <a className="hover:text-red-500" href="/about">
                About
              </a>
              <a className="hover:text-red-500" href="/loan">
                Services
              </a>
             
             
              <a className="hover:text-red-500" href="/contact">
               Contact
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <Link to="/auth/signin"
                  className="rounded-md bg-red-500 text-white px-5 py-2.5 text-sm font-medium shadow-lg hover:bg-red-700"
                  
                >
                  Login
                </Link>

                <div className="hidden sm:flex">
                  <Link to='/auth/signup'
                    className="rounded-md bg-gray-200 text-gray-900 px-5 py-2.5 text-sm font-medium hover:text-blue-500"
                    
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-200 p-2 text-gray-900 hover:text-blue-500 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default Home;
