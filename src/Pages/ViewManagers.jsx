import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

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
      const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/manager/all', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`
        }
      });
      if (response.data && Array.isArray(response.data.users)) {
        setManagers(response.data.users);
      } else {
        setError('Unexpected data format received from server');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.error || 'Failed to fetch manager data');
      } else {
        setError('Request to the server failed');
      }
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  const handleDeletePerson = async (id) => {
    try {
      const response = await axios.delete(`https://umwarimu-loan-hub-api.onrender.com/api/manager/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`
        }
      });
      if (response.status === 200) {
        setManagers((prevManagers) => prevManagers.filter((manager) => manager._id !== id));
      } else {
        setError('Failed to delete manager');
      }
    } catch (error) {
      setError('Failed to delete manager');
    }
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
  };

  const filteredManagers = managers.filter(manager =>
    manager.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[89%] ml-[1%] mt-[100px]">
        <h2 className="text-2xl font-semibold mb-4">Managers</h2>
        <div className="flex justify-between mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none w-[30%]"
          />
          <Link to="/admin/contactus">
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              Add Manager
            </button>
          </Link>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Names</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modify</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredManagers.map((manager) => (
                <tr key={manager._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{manager.username}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{manager.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{manager.phoneNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-blue-900 hover:text-red-800 mr-5" onClick={() => handleDeletePerson(manager._id)}>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ViewManager;
