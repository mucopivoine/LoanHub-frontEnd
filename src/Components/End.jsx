import { Link } from "react-router-dom";

function End() {
  return (
    <>
      <footer className="bg-gray-800 text-gray-300">
        <div className="container bg-gray-800 mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="mb-4 sm:mb-0">
              <Link to="/">
                <h3 className="text-xl font-bold mb-4">Home</h3>
              </Link>
              <Link to="/about">
                <h3 className="text-xl font-bold mb-4">About</h3>
              </Link>
              <Link to="/services">
                <h3 className="text-xl font-bold mb-4">Services</h3>
              </Link>
              <Link to="/contact">
                <h3 className="text-xl font-bold mb-4">Contact</h3>
              </Link>
            </div>

          
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl font-bold mb-4 font-serif">Company</h3>
              <ul className="space-y-2 text-sm">
                <li className="text-gray-300 hover:opacity-75">BNR</li>
                <li className="text-gray-300 hover:opacity-75">RCA</li>
                <li className="text-gray-300 hover:opacity-75">RSSB</li>
                <li className="text-gray-300 hover:opacity-75">REB</li>
              </ul>
            </div>

           
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl font-bold mb-4">Helpful Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://umwalimusacco.rw/?page_id=26" className="text-gray-300 hover:opacity-75">Sacco</a>
                </li>
                <li>
                  <a href="https://umwalimusacco.rw/?page_id=26" className="text-gray-300 hover:opacity-75">Umwalimu Sacco</a>
                </li>
              </ul>
            </div>

           
            <div className="mb-4 sm:mb-0">
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3315124" className="text-gray-300 hover:opacity-75">Accessibility</a>
                </li>
                <li>
                  <a href="https://www.investopedia.com/loan-terms-5075341#:~:text=Loan%20terms%20refer%20to%20the,special%20conditions%20that%20may%20apply." className="text-gray-300 hover:opacity-75">Returns Policy</a>
                </li>
              </ul>
            </div>
          </div>

      
          <div className="mt-8 flex justify-center space-x-4">
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

        
          <p className="mt-8 text-xs text-gray-400 text-center">
            &copy; 2024. Umwalimu Loan Hub. All rights reserved.{' '}
            <span className="text-red-500">❤️</span> 
          </p>
        </div>
      </footer>
    </>
  );
}

export default End;
