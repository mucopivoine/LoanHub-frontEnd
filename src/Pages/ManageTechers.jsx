import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidemenu from '../Components/Sidemenu';

function ManageTeachers() {
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('https://your-api-url/api/teachers');
      setTeachers(response.data);
    } catch (error) {
      console.error('Error fetching teachers:', error);
    }
  };

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://your-api-url/api/teachers/${id}`);
      fetchTeachers(); // Refresh the list after deletion
    } catch (error) {
      console.error('Error deleting teacher:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://your-api-url/api/teachers/${selectedTeacher.id}`, selectedTeacher);
      fetchTeachers(); // Refresh the list after update
      setSelectedTeacher(null); // Clear the selected teacher
    } catch (error) {
      console.error('Error updating teacher:', error);
    }
  };
  
  return (
    <>
      <Sidemenu />
      <div className="container w-[50%] mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Manage Teachers</h1>
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Teachers List</h2>
          <ul>
            {teachers.map((teacher) => (
              <li key={teacher.id} className="mb-4">
                <div>
                  <span>{teacher.fullName}</span>
                  <button onClick={() => handleEdit(teacher)} className="ml-2 bg-blue-500 text-white p-1 rounded">Edit</button>
                  <button onClick={() => handleDelete(teacher.id)} className="ml-2 bg-red-500 text-white p-1 rounded">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {selectedTeacher && (
          <div className="bg-white p-6 rounded shadow-md mt-4">
            <h2 className="text-xl font-bold mb-4">Edit Teacher</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={selectedTeacher.fullName}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, fullName: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={selectedTeacher.email}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, email: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value={selectedTeacher.phoneNumber}
                  onChange={(e) => setSelectedTeacher({ ...selectedTeacher, phoneNumber: e.target.value })}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Update Teacher</button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default ManageTeachers;
