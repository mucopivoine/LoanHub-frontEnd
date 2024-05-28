import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidemenu from './Sidemenu';


const TeacherProfile = () => {
  const { id } = useParams(); 
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const cookie = document.cookie.split('jwt=')[1];
  if (!cookie) {
    setError("Authentication token not found");
    setLoading(false);
  }

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        console.log('Token:', cookie);
        const response = await axios.put(`https://umwarimu-loan-hub-api.onrender.com/api/teacher/put/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookie}`,
          },
          withCredentials: true,
        });
        setTeacher(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchTeacherData();
    } else {
      setError("Teacher ID is undefined");
      setLoading(false);
    }
  }, [id, cookie]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile: {error.message || error}</p>;

  return (
    <>
      <Sidemenu />
      <div className="profile-section p-4">
        <div className="profile-header flex items-center mb-4">
          <img src={teacher.profile} alt="Profile" className="profile-picture w-24 h-24 rounded-full mr-4" />
          <div className="profile-info">
            <h2 className="text-xl font-bold">{teacher.firstName} {teacher.lastName}</h2>
            <p className="text-gray-600">{teacher.schoolName}</p>
          </div>
        </div>
        <form className="profile-details bg-white p-4 rounded shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              value={teacher.firstName}
              readOnly
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              value={teacher.lastName}
              readOnly
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Account Number</label>
            <input
              type="text"
              value={teacher.accountNumber}
              readOnly
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={teacher.email}
              readOnly
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              value={teacher.phoneNumber}
              readOnly
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">School Name</label>
            <input
              type="text"
              value={teacher.schoolName}
              readOnly
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default TeacherProfile;
