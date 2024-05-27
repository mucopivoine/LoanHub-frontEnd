import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import Sidebar from '../Components/Sidebar';
import Search from '../Pages/Search';

const cookie = document.cookie.split('jwt=')[1];

const ViewManager = () => {
  const [managers, setManagers] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingManager, setEditingManager] = useState(null);
  const [updateData, setUpdateData] = useState({
    currentPassword: '',
    newPassword: '',
    confirm: ''
  });

  const fetchManagers = async () => {
    try {
      const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/teacher/all', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`,
        },
        withCredentials: true,
      });

      if (response.data && Array.isArray(response.data.users)) {
        setManagers(response.data.users);
      } else {
        setError('Unexpected data format received from server');
      }
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to fetch manager data');
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  const handleDeletePerson = async (id) => {
    // Implement delete logic here
    console.log(`Delete manager with ID: ${id}`);
  };

  const handleEditClick = (manager) => {
    setEditingManager(manager);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdatePerson = () => {
    // Implement update logic here
    console.log(`Update manager with data: ${JSON.stringify(updateData)}`);
  };

  const filteredManagers = managers.filter(manager =>
    manager.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-[70%] ml-[20%] lg:mt-[50px]">
        <div className="flex justify-end mb-4">
          <Link to="/admin/contactus">
            <button className="bg-red-500 hover:bg-red-400 w-[20%] text-white font-bold py-2 px-4 rounded">
              Add Person
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Names</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Number</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.isArray(filteredManagers) && filteredManagers.map((manager) => (
                    <tr key={manager._id}>
                      <td className="px-6 py-4 whitespace-nowrap">{manager.firstName}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{manager.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{manager.phoneNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap">{manager.accountNumber}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium gap-4">
                        <div className="flex gap-5">
                          <button onClick={() => handleDeletePerson(manager._id)}>
                            <MdDelete />
                          </button>
                          <button className="p-2" onClick={() => handleEditClick(manager)}>
                            <FaEdit />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Search />
        </div>
        <div className="w-full p-6">
          <h2 className="text-2xl font-semibold mb-4">View Teachers</h2>
          <input
            type="text"
            placeholder="Search by teacher name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
          />
          {error && <p className="text-red-500">{error}</p>}
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.isArray(filteredManagers) && filteredManagers.map((teacher) => (
                <tr key={teacher.TeacherId}>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.accountNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link to={`/teacherdetails/${teacher.TeacherId}`} className="text-black hover:underline">
                      {teacher.username}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-red-600 hover:text-red-800" onClick={() => handleDeletePerson(teacher.TeacherId)}>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {editingManager && (
          <div className="mt-8">
            <h2>Edit Manager: {editingManager.name}</h2>
            <div className="flex flex-col gap-4">
              <input
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                value={updateData.currentPassword}
                onChange={handleUpdateChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={updateData.newPassword}
                onChange={handleUpdateChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <input
                type="password"
                name="confirm"
                placeholder="Confirm Password"
                value={updateData.confirm}
                onChange={handleUpdateChange}
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              />
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
                onClick={handleUpdatePerson}
              >
                Update Manager
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewManager;
