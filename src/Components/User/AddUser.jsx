import React, { useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Search from '../../Pages/Searchtch';
import { ToastContainer, toast } from 'react-toastify';
const cookie = document.cookie.split('jwt=')[1];


const AddUser = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    names: '',
    accountNumber: '',
    schoolName: '',
    salary: ''
   
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
      const response = await axios.post('https://umwarimu-loan-hub-api.onrender.com/api/teacherDetails/add', formData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`
        },
        withCredentials: true,
      });

      console.log(response.data);

      setIsLoading(false); 

      setTimeout(() => {
        navigate('/admin/database');
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
      <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Create New User</h2>
        {formSubmitted ? (
          <p className="text-green-500 text-center mb-4">User created successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Names</label>
              <input
                type="text"
                name="names"
                value={formData.names}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">School Name</label>
              <input
                type="text"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Salary</label>
              <input
                type=""
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-600"
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

export default AddUser;
