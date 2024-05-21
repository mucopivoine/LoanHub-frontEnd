import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from '../Components/Sidemenu';

function ViewTeacher() {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState('');

  const getToken  = localStorage.getItem('token')
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('https://umwarimu-loan-hub-api.onrender.com/api/teacher/all',{
          headers: {
            Authorization:`Bearer ${getToken}`
          },
        });
        setTeachers(response.data);
      } catch (error) {
        setError('Failed to fetch teacher data');
        console.error('Error fetching teacher data:', error);
      }
    };

    fetchTeachers();
  }, []);

  const filteredTeachers = teachers.filter(teacher =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex">
      <Sidebar />
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
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTeachers.map((teacher) => (
              <tr key={teacher.id}>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{teacher.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewTeacher;
