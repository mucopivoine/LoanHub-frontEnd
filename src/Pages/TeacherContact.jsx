import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Sidemenu from '../Components/Sidemenu';
import axios from 'axios'; // Make sure to import axios
import { useNavigate } from 'react-router-dom';
const cookie = document.cookie.split('jwt=')[1];
const TeacherContact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Token:', cookie);
      setIsLoading(true);
      const response = await axios.post('https://umwarimu-loan-hub-api.onrender.com/api/message/send', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`
        },
        withCredentials: true,
      });
      console.log(response.data);
      toast.success("Message sent successfully!");
      setTimeout(() => {
        setIsLoading(false);
        navigate('/layout/teacheranalytics');
      }, 3000);
    } catch (error) {
      toast.error("Failed to send response.");
      setIsLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <Sidemenu />
      <div className="flex justify-center items-center ">
        <div className="w-[40%] p-[3rem] mt-[50px]">
          <div className="bg-white p-10 rounded shadow-md">
            <h1 className="text-2xl font-bold text-center mb-14">Contact Bank Manager</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName" // Add name attribute
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email" // Add name attribute
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject" // Add name attribute
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message" // Add name attribute
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-900 text-white rounded"
                disabled={isLoading} // Disable button while loading
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
export default TeacherContact;