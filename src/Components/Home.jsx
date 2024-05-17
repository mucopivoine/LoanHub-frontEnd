import  { useState } from 'react';
import { Link } from "react-router-dom";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="bg-white text-black fixed top-0 left-0 right-0 z-50 shadow-lg font-serif">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <img className="h-12 w-12" src="/money.png" alt="Money Icon" />
              <h1 className="ml-2 text-2xl font-bold font-poppins">Umwalimu Loan Hub</h1>
            </div>

            <nav className="hidden md:flex gap-8 text-lg">
              <a className="hover:text-red-500" href="/">
                Home
              </a>
              <Link to="/about" className="hover:text-red-500">
                About
              </Link>
              <Link to="/services" className="hover:text-red-500">
                Services
              </Link>
              <Link to="/contact" className="hover:text-red-500">
                Contact
              </Link>
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
                    className="rounded-md bg-gray-200 text-gray-900 px-5 py-2.5 text-sm font-medium hover:bg-gray-400"
                  >
                    Register
                  </Link>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded bg-red-500 hover:bg-red-700 p-2 text-gray-500 transition duration-300"
                >
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-2 px-4 py-2 text-lg">
            <nav className="flex flex-col gap-4">
              <a className="hover:text-red-500" href="/">
                Home
              </a>
              <Link to="/about" className="hover:text-red-500">
                About
              </Link>
              <Link to="/services" className="hover:text-red-500">
                Services
              </Link>
              <Link to="/contact" className="hover:text-red-500">
                Contact
              </Link>
              <Link to="/auth/signin" className="hover:text-red-500">
                Login
              </Link>
              <Link to="/auth/signup" className="hover:text-red-500">
                Register
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Home;
