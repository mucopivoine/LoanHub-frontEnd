import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Sidemenu from './Sidemenu';

const cookie = document.cookie.split('jwt=')[1];
const TeacherProfile = () => {
  const { id } = useParams(); 
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  
  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        console.log('Token:', cookie);
        const response = await axios.put(`https://umwarimu-loan-hub-api.onrender.com/api/teacher/put/${cookie}`, {
          headers: {
            'Authorization': `Bearer ${cookie}`,
          },
          withCredentials: true,
        });
        console.log('Response data :',response.data);
        if(response.data.teacher){
        setTeacher(response.data);
        }else {
          setError('teacher profile not found');
        }
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
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading profile: {error.message || error}</p>;

  return (
    <>
      <Sidemenu />
      <div className="profile-section p-4">
        <div className="profile-header flex items-center mb-4">
          <img src={teacher.profile} alt="Profile" className="profile-picture w-24 h-24 rounded-full mr-4" />
          <div className="overflow-x-auto">
              <table className="w-[80%] bg-slate-50 border border-gray-200">
                <tbody>
                  <tr>
                    <th className="py-3 px-4 bg-white font-bold text-left">Field</th>
                    <th className="py-3 px-4 sm:px-6 lg:px-11 bg-white font-bold text-left">Value</th>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Names</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{teacher.firstName}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Names</td>
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
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{teacher.accountNumber || "Not available"}</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 sm:px-6 lg:px-8 font-bold">Amount Requested</td>
                    <td className="py-3 px-4 sm:px-6 lg:px-8">{teacher.schoolName || "Not available"}</td>
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
