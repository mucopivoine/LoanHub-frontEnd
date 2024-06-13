import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Sidemenu from './Sidemenu';

const cookie = document.cookie.split('jwt=')[1];

const TeacherProfile = () => {
  const { id } = useParams();
  const [teacherDetails, setTeacherDetails] = useState({
    username: '',
    accountNumber: '',
    email: ''
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherDetails = async () => {
      try {
        const response = await axios.get(`https://umwarimu-loan-hub-api.onrender.com/api/teacher/getOne/${id}`, {
          headers: {
            'Authorization': `Bearer ${cookie}`
          },
          withCredentials: true
        });
        console.log('Cookie:', cookie);
        console.log('Response data:', response.data); 

        if (response.data.user) {
          setTeacherDetails(response.data.user);
        } else {
          setError('Teacher details not found');
        }
      } catch (error) {
        console.error('Error fetching teacher details:', error); 
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacherDetails({
      ...teacherDetails,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://umwarimu-loan-hub-api.onrender.com/api/teacher/update/${id}`, teacherDetails, {
        headers: {
          'Authorization': `Bearer ${cookie}`
        },
        withCredentials: true
      });
      console.log('Update response:', response.data);
      alert('Teacher details updated successfully');
    } catch (error) {
      console.error('Error updating teacher details:', error); 
      alert('Failed to update teacher details');
    }
  };

  if (loading) {
    return <div className="mt-32 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="mt-32 text-center text-red-500">{error}</div>;
  }

  if (!teacherDetails) {
    return <div className="mt-32 text-center">Teacher details not found</div>;
  }

  return (
    <>
      <div>
        <Sidemenu />
        <div className='w-[70%] ml-[30px] mt-[100px]'>
          <div className='flex justify-between'>
            <div className=''>
              <h2 className="text-2xl font-bold mb-4">Teacher Profile</h2>
            </div>
            <div>
              <Link to="mngresponse">
                <button className="bg-blue-900 hover:bg-blue-800 items-end text-white font-bold py-2 px-4 rounded">
                  Response
                </button>
              </Link>
            </div>
          </div>
          <div className="overflow-x-auto">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={teacherDetails.username}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="accountNumber">Account Number</label>
                <input
                  type="text"
                  id="accountNumber"
                  name="accountNumber"
                  value={teacherDetails.accountNumber}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={teacherDetails.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherProfile;
