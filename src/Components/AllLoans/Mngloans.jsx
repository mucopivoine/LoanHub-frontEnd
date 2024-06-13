import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MdDelete } from 'react-icons/md';
import Barnav from '../Barnav';

const cookie = document.cookie.split('jwt=')[1];

function Mngloans() {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const handleFetch = async () => {
    try {
      const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/getAll', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie}`,
        },
        withCredentials: true,
      });

      if (response.data && Array.isArray(response.data.loans)) {
        setTeachers(response.data.loans);
      } else {
        setError('Unexpected data format received from server');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Failed to fetch loan data');
      } else {
        setError('Network error: Failed to fetch loan data');
      }
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const handleDeleteTeacher = async (id) => {
    try {
      const response = await axios.delete(`https://umwarimu-loan-hub-api.onrender.com/api/loanRequest/delete/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie}`,
        },
        withCredentials: true,
      });

      if (response.status === 200) {
        setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher._id !== id));
        setError(''); // Clear any previous error message
      } else {
        setError('Failed to delete loan');
      }
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Failed to delete loan');
      } else {
        setError('Network error: Failed to delete loan');
      }
    }
  };

  const filteredTeachers = teachers.filter((teacher) => {
    const fullName = teacher.fullName ? teacher.fullName.toLowerCase() : '';
    const email = teacher.email ? teacher.email.toLowerCase() : '';
    return fullName.includes(searchTerm.toLowerCase()) || email.includes(searchTerm.toLowerCase());
  });

  return (
    <>
      <div>
        <Barnav />
        <div className="w-[70%] ml-[30px] mt-[100px]">
          <div className="flex justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4">Manage Loan Requests</h2>
            </div>
            <div>
              <input
                type="text"
                placeholder="Search by full name or email"
                className="py-2 px-4 border border-gray-300 rounded-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="overflow-x-auto">
            <table className="w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-3 px-4 text-left">Names</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">Phone Number</th>
                  <th className="py-3 px-4 text-left">School Name</th>
                  <th className="py-3 px-4 text-left">Amount</th>
                  <th className="py-3 px-4 text-left">Salary</th>
                  <th className="py-3 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTeachers.map((teacher) => (
                  <tr key={teacher._id}>
                    <td className="py-3 px-4">{teacher.fullName}</td>
                    <td className="py-3 px-4">{teacher.email}</td>
                    <td className="py-3 px-4">{teacher.phoneNumber}</td>
                    <td className="py-3 px-4">{teacher.workSchool}</td>
                    <td className="py-3 px-4">{teacher.amountRequested}</td>
                    <td className="py-3 px-4">{teacher.monthlySalary}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <Link to={`/mngdetails/${teacher._id}`} className="text-blue-500 hover:underline">Details</Link>
                        <button onClick={() => handleDeleteTeacher(teacher._id)} className="text-red-500 hover:underline">
                          <MdDelete />
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
    </>
  );
}

export default Mngloans;
