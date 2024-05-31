import { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Sidebar';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';

const getTokenFromCookie = () => {
  const cookies = document.cookie.split(';');
  const jwtCookie = cookies.find(cookie => cookie.trim().startsWith('jwt='));
  if (jwtCookie) {
    return jwtCookie.split('=')[1];
  } else {
    return null;
  }
};

function AllLoans() {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleFetch = async () => {
    try {
      const token = getTokenFromCookie();
      if (!token) {
        setError('No token found');
        return;
      }
      console.log('Token:', token);

      const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/getAll', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        withCredentials: true,
      });

      console.log('API Response:', response);

      if (response.data && Array.isArray(response.data.loans)) {
        setTeachers(response.data.loans);
      } else {
        console.error('Unexpected data format received from server:', response.data);
        setError('Unexpected data format received from server');
      }
    } catch (error) {
      console.error('Error fetching loan data:', error.message);
      if (error.response) {
        setError(error.response.data.message || 'Failed to fetch loan data');
      } else {
        setError('Failed to fetch loan data');
      }
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleDeleteTeacher = async (id) => {
    try {
      const token = getTokenFromCookie();
      if (!token) {
        setError('No token found');
        return;
      }
      console.log('Deleting teacher with ID:', id);

      const response = await axios.delete(`https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        withCredentials: true,
      });

      console.log('Delete response status:', response.status);
      if (response.status === 200) {
        setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher._id !== id));
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

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-[70%] ml-[2%] mt-[50px]">
          <h2 className="text-2xl font-semibold mb-4">Loans requested</h2>
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
              {teachers
                .filter(teacher => teacher.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
                .map((teacher) => (
                  <tr key={teacher._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{teacher.fullName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{teacher.workSchool}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{teacher.phoneNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{teacher.amountRequested}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className='items-center text-center'>
                        <button
                          className="text-blue-800 hover:text-red-800"
                          onClick={() => handleDeleteTeacher(teacher._id)}
                        >
                          <MdDelete />
                        </button>
                        <Link to={`/admin/loanDetails/${teacher._id}`}>
                          <button className="text-blue-800 hover:text-red-800 ml-5">
                            View
                          </button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllLoans;
