import  { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import Search from "./Search"
import Sidebar from '../Components/Sidebar';
const cookie =document.cookie.split('jwt=')[1];
const ManagerForm = () => {
  const [error, setError] = useState('');
  const [managers, setManagers] = useState([]);
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: ''
  });

  useEffect(() => {
    // Cleanup function to clear form data when the component unmounts
    return () => {
      setFormData({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: ''
      });
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', formData);
    // Clear the form after submission
    setFormData({
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: ''
    });
  };

  const fetchManagers = async () => {
    try {
      console.log('Token:', cookie);
          const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/manager/signup', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`
        }
      });
      console.log('Response data:', response.data);
      // Check if the response contains the users key and if it's an array
      if (response.data && Array.isArray(response.data.users)) {
        setManagers(response.data.users);
      } else {
        console.error('Expected an array but received:', response.data);
        setError('Unexpected data format received from server');
      }
    } catch (error) {
      console.error('Error fetching manager data:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        setError(error.response.data.error || 'Failed to fetch manager data');
      } else {
        setError('Failed to fetch manager data');
      }
  }
};
  useEffect(() => {
    fetchManagers();
  }, []);
  // const handleDeletePerson = async() => {
  //   // Implement delete logic here
  // };
  // const handleEditClick = (person) => {
  //   setEditingManager(person);
  // };
  // const handleUpdateChange = (e) => {
  //   const { name, value } = e.target;
  //   setUpdateData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };
  // const handleUpdatePerson = () => {
  //   // Implement update logic here
  // };
  // // Filter managers based on search term
  // const filteredManagers = managers.filter(manager =>
  //   manager.username.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <>
    <Search/>
    <Sidebar/>
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Manager</h2>
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
        <Link to ="/admin/viewmanager">
        <button
          type="submit"
          className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Create
        </button>
        </Link>
      </form>
    </div>
    </>
  );
};

export default ManagerForm;
