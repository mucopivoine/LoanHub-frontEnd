import { Sidebar } from 'lucide-react';
import React, { useState } from 'react'
import Sidemenu from '../Components/Sidemenu';

function Profile() {
    const [teachers, setTeachers] = useState('');
    const [fullName, setFullName] = useState('');
    const [workSchool, setSchoolName] = useState('');
    const [email, setEmail] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [teacher_ID, setTeacherId] = useState('');
    const [bankAccountNumber, setBankNumber] = useState('');
    const [profile, setProfile] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('fullName', fullName);
        formData.append('profile', profile);
        formData.append('workSchool', workSchool);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('teacher_ID', teacher_ID); // Ensure this matches the expected format
        formData.append('bankAccountNumber', bankAccountNumber);
        formData.append('maritalStatus', maritalStatus.toLowerCase());
       
    }
    
    const handlefetch = async () => {
        try {console.log('Token:' , cookie);
            const response = await axios.get ('https://umwarimu-loan-hub-api.onrender.com/api/teacher/all',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie}`,
                  }  
            })
            console.log('Response data:', response.data);
            if (response.data && Array.isArray(response.data.users)) {
                setTeachers(response.data.users);
              } else {
                console.error('Expected an array but received:', response.data);
                setError('Unexpected data format received from server');
              }
            } catch (error) {
              console.error('Error fetching teacher data:', error);
              if (error.response) {
                console.error('Response data:', error.response.data);
                setError(error.response.data.error || 'Failed to fetch teacher data');
              } else {
                setError('Failed to fetch teacher data');
              }
        }
    }
    useEffect(() => {
        handlefetch();
      }, []);
  return (
    <div>
        <Sidemenu/>
        <div className="flex justify-center items-center min-h-screen mt-[50px]">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-3xl"></div>
         <form onSubmit={handleSubmit}>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
              <input
                  type="profile"
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-gray-700">Profile</label>
                
                 <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-gray-700">Teacher Id</label>
                <input
                  type="text"
                  value={teacher_ID}
                  onChange={(e) => setTeacherId(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-gray-700">Bank Account Number</label>
                <input
                  type="text"
                  value={bankAccountNumber}
                  onChange={(e) => setBankNumber(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-gray-700">Loan Amount Requested</label>
               
                 <input
                  type="text"
                  value={workSchool}
                  onChange={(e) => setSchoolName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md mt-2"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-gray-700">Marital status</label>
                <select
                  value={maritalStatus}
                  onChange={(e) => setMaritalStatus (e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                >
                  <option value="" disabled>Select your status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                </select>
              </div>
              </div> 
              <button
                type="submit"
                className="w-full p-2 bg-red-500 text-white rounded"
              >
                Submit Loan Application
              </button>
            </form>
    </div>
    </div>
  )
}

export default Profile