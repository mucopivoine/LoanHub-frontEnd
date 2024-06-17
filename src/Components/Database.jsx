import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar';
import { MdDelete } from 'react-icons/md';
import { Search } from 'lucide-react';
import { FaEdit } from 'react-icons/fa';

const cookie = document.cookie.split('jwt=')[1];

function Database() {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const handleFetch = async () => {
    try {
      console.log('Token:', cookie);
      const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/teacherDetails/getall', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie}`, // Corrected template literal usage
        }
      });

      console.log('fetching data');
      console.log('Response data:', response.data);

      if (response.data && Array.isArray(response.data.teachers)) {
        setTeachers(response.data.teachers);
        console.log('Teachers set:', response.data.teachers);
      } else {
        console.error('Expected an array but received:', response.data);
        setError('Unexpected data format received from server');
      }
    } catch (error) {
      console.error('Error fetching teacher data:', error.message);
      if (error.response) {
        setError(error.response.data.message || 'Failed to fetch teacher data');
      } else {
        setError('Failed to fetch teacher data');
      }
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleDeleteTeacher = async (id) => {
    try {
      console.log('Deleting teacher with ID:', id);
      const response = await axios.delete(`https://umwarimu-loan-hub-api.onrender.com/api/teacherDetails/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie}`, // Corrected template literal usage
        }
      });

      console.log('Delete response status:', response.status);
      if (response.status === 200) {
        setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher._id !== id)); // Adjusted to match the correct property name
        console.log('Teacher deleted:', id);
      } else {
        setError('Failed to delete teacher');
      }
    } catch (error) {
      console.error('Error deleting teacher:', error.message);
      if (error.response) {
        setError(error.response.data.message || 'Failed to delete teacher');
      } else {
        setError('Failed to delete teacher');
      }
    }
  };

  const filteredTeachers = teachers.filter((teacher) => {
    return teacher.names && teacher.names.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTeachers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <Search/>
      <div className="flex">
        <Sidebar />
        <div className="w-[95%] ml-[2%] mt-[30px]">
          <h2 className="text-2xl font-semibold mb-4">Sacco users</h2>
          <div className="flex justify-between mb-4">
          <div className="w-full ">
            <div className='flex justify-between'>
              <div className='flex-1'>
                <input
                  type="text"
                  placeholder="Search by..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="px-4 py-2 w-[40%] border border-gray-300 rounded-md focus:outline-none" // Adjust the width here
                />
              </div>
              <div>
                <Link to="adduser">
                  <button className="bg-blue-900 hover:bg-blue-800 mb-5 text-white font-bold py-2 px-4 rounded mr-5">
                    Add User
                  </button>
                </Link>
              </div>
            </div>
            <div className='' >
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Full Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  School Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Salary
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.isArray(currentItems) && currentItems.map((teacher) => (
                <tr key={teacher._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.names}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.schoolName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{teacher.salary}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="text-blue-900 hover:text-blue-800 items-center text-xl ml-5"
                      onClick={() => handleDeleteTeacher(teacher._id)}
                    >
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    </>
  );
}

export default Database;
