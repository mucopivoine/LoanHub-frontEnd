import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import Sidebar from '../Components/Sidebar';
import Search from '../Pages/Search';

const cookie = document.cookie.split('jwt=')[1];

const ViewTeachers = () => {
  const [managers, setManagers] = useState([]);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingManager, setEditingManager] = useState(null);
  const [updateData, setUpdateData] = useState({
    currentPassword: '',
    newPassword: '',
    confirm: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchManagers = async (page = 1) => {
    try {
      console.log('Token:', cookie);
      const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/teacher/all', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${cookie}`,
        },
        withCredentials: true,
        params: { page },
      });

      console.log('Response data:', response.data);

      if (response.data && Array.isArray(response.data.users)) {
        setManagers(response.data.users);
        setTotalPages(response.data.totalPages || 1);
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
    fetchManagers(currentPage);
  }, [currentPage]);

  const handleDeleteTeacher = async (id) => {
    // Implement delete logic here
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

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const filteredManagers = managers.filter(manager =>
    manager.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-[70%] ml-[20%] lg:mt-[50px]">
          <Search />
          <div className="">
            <Link to="/admin/contactus">
              <button className="bg-red-500 hover:bg-red-400 lg:ml-[80%] w-[20%] items-end text-white font-bold py-2 px-4 rounded">
                Add Person
              </button>
            </Link>
          </div>
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Account Number
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Names
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredManagers.map((teacher) => (
                      <tr key={teacher._id}>
                        <td className="px-6 py-4 whitespace-nowrap">{teacher.accountNumber}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link to={`/teacherdetails/${teacher.TeacherId}`} className="text-black hover:underline">{teacher.username}</Link>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-red-600 hover:text-red-800" onClick={() => handleDeleteTeacher(teacher.TeacherId)}>
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
          <div className="w-[70%] p-6 ml-[20%]">
            <h2 className="text-2xl font-semibold mb-4">View Teachers</h2>
            <input
              type="text"
              placeholder="Search by teacher name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none"
            />
            {error && <p className="text-red-500">{error}</p>}
            <div className="flex justify-between mt-4">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTeachers;
