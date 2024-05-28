import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Search from './Search';
import { ToastContainer, toast } from 'react-toastify';
const cookie = document.cookie.split('jwt=')[1];


const ManagerForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
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
      const response = await axios.post('https://umwarimu-loan-hub-api.onrender.com/api/manager/signup', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`
        },
        withCredentials: true,
      });

      console.log(response.data);

      setIsLoading(false); 

      setTimeout(() => {
        navigate('/admin/viewmanager');
      }, 3000); // Redirect after 3 seconds
    } catch (error) {
      setIsLoading(false); 
      console.log(error);
    }
  };

  return (
    <>
      <Search/>
      <Sidebar/>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Manager</h2>
        {formSubmitted ? (
          <p className="text-green-500 text-center mb-4">Manager created successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
            >
              Create
            </button>
          </form>
        )}
      </div>
      <ToastContainer/>
    </>
  );
};

export default ManagerForm;
