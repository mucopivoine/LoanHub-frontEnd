import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import { MdDelete } from 'react-icons/md';
import { Search } from 'lucide-react';

const cookie = document.cookie.split('jwt=')[1];

function AllLoans() {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleFetch = async () => {
    try {
      console.log('Token:', cookie);
      const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/getAll', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie}`,
        },
        withCredentials: true,
      });

      console.log('API Response:', response); // Log the entire response object

      if (response.data && Array.isArray(response.data.loans)) {
        // Assuming 'loans' is the key containing the array of teacher data
        setTeachers(response.data.loans.map((loan) => ({
          fullName: loan.fullName,
          phoneNumber: loan.phoneNumber,
          workSchool: loan.workSchool,
          amountRequested: loan.amountRequested,
          teacher_ID: loan.teacher_ID,
        })));
      } else {
        console.error('Unexpected data format received from server:', response.data);
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
        },
        withCredentials: true,
      });

      console.log('Delete response status:', response.status);
      if (response.status === 200) {
        setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.teacher_ID !== id)); // Adjusted to match the correct property name
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
    return teacher.fullName && teacher.fullName.toLowerCase().includes(searchTerm.toLowerCase());
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
      <div className="w-[70%] ml-[2%] ">
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
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                School Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(currentItems) && currentItems.map((teacher) => (
              <tr key={teacher._id}>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.fullName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.phoneNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.workSchool}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.amountRequested}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteTeacher(teacher.teacher_ID)}
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

export default AllLoans;
