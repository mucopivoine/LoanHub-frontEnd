function End() {
    return (
      <footer className="bg-gray-800 text-gray-300">
        <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Services Section */}
            <div className="mb-4 sm:mb-0 mr-16 ml-48"> {/* Reduce bottom margin for smaller screens */}
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:opacity-75">Coaching</a></li>
                {/* Add more services here */}
              </ul>
            </div>
  
            {/* Company Section */}
            <div className="mb-4 sm:mb-0 ml-24"> {/* Reduce bottom margin for smaller screens */}
              <h3 className="text-xl font-bold mb-4 font-serif">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:opacity-75">About</a></li>
                <li><a href="#" className="text-gray-300 hover:opacity-75">Meet the Team</a></li>
                {/* Add more company links here */}
              </ul>
            </div>
  
            {/* Helpful Links Section */}
            <div className="mb-4 sm:mb-0 mr-32"> {/* Reduce bottom margin for smaller screens */}
              <h3 className="text-xl font-bold mb-4 ">Helpful Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:opacity-75">Contact</a></li>
                {/* Add more helpful links here */}
              </ul>
            </div>
  
            {/* Legal Section */}
            <div className="mb-4 sm:mb-0"> {/* Reduce bottom margin for smaller screens */}
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:opacity-75">Accessibility</a></li>
                <li><a href="#" className="text-gray-300 hover:opacity-75">Returns Policy</a></li>
                {/* Add more legal links here */}
              </ul>
            </div>
          </div>
  
          {/* Social Media Links Section */}
          <div className="mt-8 flex justify-center items-center space-x-4">
            <a href="https://www.facebook.com/mwalimu.sacco/?lang=en" target="_blank" rel="noreferrer" className="text-white hover:opacity-75">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/mwalimu.sacco/?lang=en" target="_blank" rel="noreferrer" className="text-white hover:opacity-75">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/mwalimusacco?lang=en" target="_blank" rel="noreferrer" className="text-white hover:opacity-75">
              <i className="fab fa-twitter"></i>
            </a>
            
          </div>
  
          {/* Copyright Notice with Heart Symbol */}
          <p className="mt-8 text-xs text-gray-400 text-center">
            &copy; 2024. Umwalimu Loan Hub. All rights reserved.{' '}
            <span className="text-red-500">❤️</span> {/* Heart Symbol */}
          </p>
        </div>
      </footer>
    );
  }
  
  export default End;
  