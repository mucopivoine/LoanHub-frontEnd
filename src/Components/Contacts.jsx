import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Assuming you want to use solid icons

const Contacts = () => {
  return (
    <div className="bg-white min-h-screen py-16 cursor-pointer">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-black mb-4 font-serif">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We would love to hear from you!
        </p>
        <div className="flex flex-wrap justify-center">
          {/* Contact Card: Call Us */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-gray-600 rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center border-b-4 border-red-700">
                <FontAwesomeIcon icon={faMobile} className="text-5xl mb-4" />
                <h2 className="text-xl font-bold">Call Us</h2>
              </div>
              <ul className="text-center text-sm py-4">
                <li className="border-b py-2">+(250) 0722222222</li>
              </ul>
            </div>
          </div>

          {/* Contact Card: Email Us */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-gray-600 rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center border-b-4 border-red-700">
                <FontAwesomeIcon icon={faEnvelope} className="text-5xl mb-4" />
                <h2 className="text-xl font-bold">Email Us</h2>
              </div>
              <ul className="text-center text-sm py-4">
                <li className="border-b py-2">
                  <a href="mailto:umwalimusacco@gmail.com" className="hover:underline">umwalimusacco@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Card: Visit Us */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-gray-600 rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center border-b-4 border-red-700">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-5xl mb-4" />
                <h2 className="text-xl font-bold">Visit Us</h2>
              </div>
              <ul className="text-center text-sm py-4">
                <li className="border-b py-2">Rwanda, Kigali</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full md:w-auto">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
            Send Us a Message
          </h3>
          <form className="w-full max-w-md mx-auto">
            <textarea
              className="w-full bg-gray-100 border border-gray-300 rounded-md p-3 mb-4"
              rows="5"
              placeholder="Write your message here..."
            ></textarea>
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
