import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobile, faLocationArrow,faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
// import {Link} from "react-router-dom"


const Contacts = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: ''
  });
  const [contactMessage, setContactMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_7wqce95';
    const templateID = 'template_ha0zy7i';
    const userID = 'NLDDnnADhpi9PL0KY';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        setContactMessage('Message sent successfully ✅');
        setTimeout(() => {
          setContactMessage('');
        }, 5000);
        setFormData({
          user_name: '',
          user_email: '',
          user_message: ''
        });
      })
      .catch(() => {
        setContactMessage('Message not sent (service error) ❌');
      });
  };

  const handleEmailIconClick = () => {
    window.location.href = 'mailto:umwalimusacco@gmail.com';
  };

  const handlePhoneIconClick = () => {
    window.open('https://wa.me/250781469546', '_blank');
  };

  const handleLinkedInIconClick = () => {
    window.open('https://www.linkedin.com/company/umwalimu-sacco', '_blank');
  };

  return (
    <div className="bg-white min-h-screen py-16 mt-20">
      <div className="w-full max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-black mb-4 font-serif">
          Contact Us 
        </h2>
        <p className="text-gray-600 text-center mb-8">
          We would love to hear from you!
        </p>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-gray-600 rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center border-b-4 border-red-700">
                <FontAwesomeIcon icon={faMobile} className="text-5xl mb-4 cursor-pointer" onClick={handlePhoneIconClick} />
                <h2 className="text-xl font-bold">Call Us</h2>
              </div>
              <ul className="text-center text-sm py-4">
                <li className="border-b py-2">+(250)  0781 469 546</li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-gray-600 rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center border-b-4 border-red-700">
                <FontAwesomeIcon icon={faEnvelope} className="text-5xl mb-4 cursor-pointer" onClick={handleEmailIconClick} />
                <h2 className="text-xl font-bold">Email Us</h2>
              </div>
              <ul className="text-center text-sm py-4">
                <li className="border-b py-2">
                  <a href="mailto:umwalimusacco@gmail.com" className="hover:underline">Email</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-white text-gray-600 rounded-lg overflow-hidden shadow-md">
              <div className="p-6 text-center border-b-4 border-red-700">
                <FontAwesomeIcon icon={faLocationArrow} className="text-5xl mb-4 cursor-pointer" onClick={handleLinkedInIconClick} />
                <h2 className="text-xl font-bold">LinkedIn</h2>
              </div>
              <ul className="text-center text-sm py-4">
                <li className="border-b py-2">
                  <a href="https://www.linkedin.com/company/umwalimu-sacco" className="hover:underline">Umwalimu Sacco LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center min-h-screen bg-white">
          <form onSubmit={handleSubmit} className="w-full max-w-lg p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Send us Message</h2>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="fullName">Full Name</label>
              <input 
                type="text" 
                id="fullName" 
                name="user_name" 
                value={formData.user_ame} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="user_email" 
                value={formData.user_email} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="user_message" 
                value={formData.user_message} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" 
                rows="5"
                required
              ></textarea>
            </div>
            
            <p className="text-red-500 text-xs italic">{contactMessage}</p>
            
            <button 
              type="submit" 
              className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Submit
            </button>
            <div className="flex justify-center mt-8">
         
        </div>
          </form>
           
        </div>
      </div>
    </div>
  );
};

export default Contacts;
