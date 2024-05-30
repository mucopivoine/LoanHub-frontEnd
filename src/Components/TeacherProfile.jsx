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
  
  useEffect(() => {
    let teacherId = localStorage.getItem('userId');
    if (!teacherId || teacherId === undefined || teacherId === null) {
      window.location.replace('/');
    }
    const fetchTeacherData = async (id) => {
      try {
        if (!cookie) {
          throw new Error('JWT token not found.');
        }
        console.log('Token:', cookie);
        if (!id) {
          throw new Error('Teacher ID not found.');
        }

        const response = await axios.get(
          `https://umwarimu-loan-hub-api.onrender.com/api/teacher/getOne/${id}`,
          {
            headers: {
              'Authorization': `Bearer ${cookie}`,
            },
            withCredentials: true,
          }
        );

        console.log('Response data:', response.data);

        if (response.data.teacher) {
          setTeacher(response.data.teacher);
        } else {
          setError('Teacher profile not found');
        }
      } catch (error) {
        setError(error.message || 'Error loading profile.');
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherData(teacherId);
  }, [id, cookie]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Sidemenu />
      <div className="profile-section p-4">
        <div className="profile-header flex items-center mb-4">
          <img src={teacher?.profile} alt="Profile" className="profile-picture w-24 h-24 rounded-full mr-4" />
          <div className="overflow-x-auto">
              <table className="w-[80%] bg-slate-50 border border-gray-200">
                <tbody>
                  <tr>
                    <th className="py-3 px-4 bg-white font-bold text-left">Field</th>
                    <th className="py-3 px-4 sm:px-6 lg:px-11 bg-white font-bold text-left">Value</th>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">First Name</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{teacher.firstName || 'Not available'}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Last Name</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{teacher.lastName}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Email</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{teacher.email || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Phone Number</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{teacher.phoneNumber || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">School Name</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{teacher.schoolName || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Account Number</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{teacher.accountNumber || "Not available"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </>
  );
};

export default TeacherProfile;
