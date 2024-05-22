import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing

function TeacherDetails() {
  const { id } = useParams(); // Extract the teacher ID from the URL parameters
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherDetails = async () => {
      try {
        const response = await fetch(`https://umwarimu-loan-hub-api.onrender.com/api/teacherDetails/getOne/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch teacher details');
        }
        const data = await response.json();
        setTeacher(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeacherDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!teacher) {
    return <div>No teacher details found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Teacher Details</h1>
      <div className="bg-white p-4 rounded shadow-md">
        <p><strong>Full Name:</strong> {teacher.fullName}</p>
        <p><strong>School Name:</strong> {teacher.workSchool}</p>
        <p><strong>Email:</strong> {teacher.email}</p>
        <p><strong>Phone Number:</strong> {teacher.phoneNumber}</p>
        <p><strong>Teacher ID:</strong> {teacher.teacher_ID}</p>
        <p><strong>Bank Account Number:</strong> {teacher.bankAccountNumber}</p>
        <p><strong>Monthly Salary:</strong> {teacher.monthlySalary}</p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
}

export default TeacherDetails;
