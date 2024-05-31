import React, { useState } from 'react';
import Sidemenu from '../Components/Sidemenu';
import ManageTeachers from './ManageTechers';

function TeacherContact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to the server
    console.log('Contact Form Submitted', {
      fullName,
      email,
      subject,
      message
    });
    // Clear the form fields after submission
    setFullName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <>
      <Sidemenu />
      <div className="flex justify-center items-center ">
        <div className=" w-[40%] p-[3rem] ">
         
          <div className="bg-white p-10 rounded shadow-md">
          <h1 className="text-2xl font-bold text-center mb-14">Contact Bank Manager.</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 ">Full Name</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-2"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full p-2 bg-blue-900 text-white rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
       
      </div>
      {/* <ManageTeachers/> */}
    </>
  );
}

export default TeacherContact;
