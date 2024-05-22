import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';

const cookie =document.cookie.split('jwt=')[1];


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
      console.log('Token:', cookie);
          const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/manager/all', {
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

  const handleDeletePerson = async(id) => {
    // Implement delete logic here
  };

  const handleEditClick = (person) => {
    setEditingManager(person);
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

  // Filter managers based on search term
  const filteredManagers = managers.filter(manager =>
    manager.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Sidebar />
      <div className="flex flex-col w-[70%] ml-[20%]">
        <div>
          <input
            type="text"
            placeholder="Search by manager name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-2 mt-[50px] border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div>
          <Link to="/admin/contactus">
            <button
              className="bg-red-500 hover:bg-red-400 lg:ml-[80%] w-[20%] items-end text-white font-bold py-2 px-4 rounded"
            >
              Add Person
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Modify
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Array.isArray(filteredManagers) && filteredManagers.map((manager) => (
                    <tr key={manager.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{manager.username}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.phoneNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium gap-4">
                        <div className="flex gap-5">
                          <button
                            className=""
                            onClick={() => handleDeletePerson(manager.id)}
                          >
                            <MdDelete />
                          </button>
                          <button
                            className="p-2"
                            onClick={() => handleEditClick(person)}
                          >
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
    </>
  );
};

export default ViewManager;
