import  { useEffect, useState } from 'react';
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
      console.log('Token:', cookie);
      const response = await axios.get('http://umwarimu-loan-hub-api.onrender.com/api/manager/all', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`
        }
      });
      console.log('Response data:', response.data);
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
      const response = await axios.delete(`http://umwarimu-loan-hub-api.onrender.com/api/manager/delete/${id}`, {
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
    <>

    <div>
    <Sidebar/>
    </div>
    <div className="flex flex-col w-[70%] ml-[20%] lg:mt-[50px] ">
      <div className=''>
    <Link to="/admin/contactus">
      <button className="bg-red-500 hover:bg-red-400 lg:ml-[80%] w-[20%] items-end text-white font-bold py-2 px-4 rounded"
>
        Add Manager
      </button></Link>
      </div>
      <div className="flex flex-col w-[70%] ml-[20%] lg:mt-[50px] ">
        <div className=''>
          <Link to="/admin/contactus">
            <button
              className="bg-red-500 hover:bg-red-400 lg:ml-[80%] w-[20%] items-end text-white font-bold py-2 px-4 rounded"
            >
              Add Manager
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Modify</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredManagers.map((manager) => (
                    <tr key={manager._id}>
                      <td>{manager.username}</td>
                      <td>{manager.email}</td>
                      <td>{manager.phoneNumber}</td>
                      <td>
                        <button onClick={() => handleDeletePerson(manager._id)}>
                          <MdDelete />
                        </button>
                        <button onClick={() => handleEditClick(manager)}>
                          <FaEdit />
                        </button>
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
              />
              <input
                type="password"
                name="newPassword"
                placeholder="New Password"
                value={updateData.newPassword}
                onChange={handleUpdateChange}
              />
              <input
                type="password"
                name="confirm"
                placeholder="Confirm Password"
                value={updateData.confirm}
                onChange={handleUpdateChange}
              />
              <button onClick={handleUpdatePerson}>
                Update Manager
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </>
  );
};

export default ViewManager;
