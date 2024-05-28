
import React, { useState } from 'react';
import axios from 'axios';
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
    LastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission

    try {
      console.log('Token:', cookie);
      const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/manager/signup', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`
        }
      });

      // Check if the response status is 200 (OK) before processing data
      if (response.status === 200 && response.data && Array.isArray(response.data.users)) {
        setFormSubmitted(true);
        console.log('Response data:', response.data);
        toast.success('Manager created successfully!')
        setTimeout(() => {
          navigate('/admin/viewmanager');
        });
      } else {
        console.error('Unexpected response:', response);
        setError('Unexpected response from server');
      }
    } catch (error) {
      console.error('Error fetching manager data:', error);
      toast.error('Failed to create manager. Please try again later.')
      if (axios.isAxiosError(error) && error.response) {
        console.error('Response data:', error.response.data);
        setError(error.response.data.error || 'Failed to fetch manager data');
      } else {
        setError('Failed to fetch manager data');
      }
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
          className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600" onClick={handleSubmit}
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

export default ManagerForm
