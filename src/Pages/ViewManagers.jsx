import { useEffect, useState } from 'react';
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
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
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

      if (Array.isArray(response.data)) {
        setManagers(response.data);
      } else if (response.data && Array.isArray(response.data.users)) {
        setManagers(response.data.users);
      } else {
        console.error('Unexpected data format received:', response.data);
        setError('Unexpected data format received from server');
      }
    } catch (error) {
      console.error('Error fetching manager data:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        setError(error.response.data.error || 'Failed to fetch manager data');
      } else if (error.request) {
        console.error('Request data:', error.request);
        setError('Request to the server failed');
      } else {
        console.error('Other error:', error.message);
        setError('An unexpected error occurred');
      }
    }
  };

  useEffect(() => {
    fetchManagers();
  }, []);

  const handleDeletePerson = async (id) => {
    try {
      console.log('Deleting manager with ID:', id);
      const response = await axios.delete(`https://umwarimu-loan-hub-api.onrender.com/api/manager/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`
        }
      });
      console.log('Delete response status:', response.status);
      if (response.status === 200) {
        setManagers((prevManagers) => prevManagers.filter((manager) => manager._id !== id));
      } else {
        setError('Failed to delete manager');
      }
    } catch (error) {
      console.error('Error deleting manager:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        setError(error.response.data.error || 'Failed to delete manager');
      } else {
        setError('Failed to delete manager');
      }
    }
  };

  const handleEditClick = (manager) => {
    setEditingManager(manager);
    setUpdateData({
      username: manager.username,
      firstName: manager.firstName,
      lastName: manager.lastName,
      email: manager.email,
      phoneNumber: manager.phoneNumber
    });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdatePerson = async () => {
    if (!editingManager) return;

    try {
      const response = await axios.put(`https://umwarimu-loan-hub-api.onrender.com/api/manager/put/${editingManager._id}`, updateData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`
        }
      });

      if (response.status === 200) {
        setManagers((prevManagers) =>
          prevManagers.map((manager) =>
            manager._id === editingManager._id ? response.data : manager
          )
        );
        setEditingManager(null);
        setUpdateData({
          username: '',
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: ''
        });
      } else {
        setError('Failed to update manager');
      }
    } catch (error) {
      console.error('Error updating manager:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        setError(error.response.data.error || 'Failed to update manager');
      } else {
        setError('Failed to update manager');
      }
    }
  };

  const filteredManagers = managers.filter(manager =>
    manager.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div>
        <Sidebar />
      </div>
      <div className="flex flex-col w-[70%] ml-[20%] lg:mt-[100px] ">
        <div className=''>
          <Link to="/admin/contactus">
            <button className="bg-red-500 hover:bg-red-400 lg:ml-[80%] w-[20%] items-end text-white font-bold py-2 px-4 rounded">
              Add Manager
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Names</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modify</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredManagers.map((manager) => (
                    <tr key={manager._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{manager.username}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{manager.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{manager.phoneNumber}</div>
                      </td>
                      <td>
                        <div className='flex gap-5'>
                          <button onClick={() => handleDeletePerson(manager._id)}>
                            <MdDelete />
                          </button>
                          <button onClick={() => handleEditClick(manager)}>
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
            <h2>Edit Manager Account:</h2><br></br>
            <div className="flex flex-col gap-4">
             
               <div className="mb-4">
          <label className="block text-gray-700">Userame</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={updateData.username}
            onChange={handleUpdateChange}
          />
        </div>
            
               <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={updateData.firstName}
            onChange={handleUpdateChange}
          />
        </div>
             
                 <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={updateData.lastName}
            onChange={handleUpdateChange}
          />
        </div>
              
                  <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={updateData.email}
            onChange={handleUpdateChange}
          />
        </div>
             
                 <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={updateData.phoneNumber}
            onChange={handleUpdateChange}
          />
        </div>
              <button onClick={handleUpdatePerson}>
                Update Manager Account
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ViewManager;