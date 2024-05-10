// import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
function End() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 mr-18">
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-300 hover:opacity-75">Coaching</a></li>
              {/* Add more services here */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-300 hover:opacity-75">About</a></li>
              <li><a href="#" className="text-gray-300 hover:opacity-75">Meet the Team</a></li>
              {/* Add more company links here */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Helpful Links</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-300 hover:opacity-75">Contact</a></li>
              {/* Add more helpful links here */}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Legal</h3>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-gray-300 hover:opacity-75">Accessibility</a></li>
              <li><a href="#" className="text-gray-300 hover:opacity-75">Returns Policy</a></li>
              {/* Add more legal links here */}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex justify-center items-center">
          <ul className="flex space-x-6">
            <li>
              <a href="#" target="_blank" rel="noreferrer" className="text-white hover:opacity-75">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer" className="text-white hover:opacity-75">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer" className="text-white hover:opacity-75">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer" className="text-white hover:opacity-75">
                <span className="sr-only">GitHub</span>
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-8 text-xs text-gray-400 text-center">&copy; 2024. Umwalimu Loan Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default End;
