import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

const TeacherDetails = () => {
  const { id } = useParams();
  const [teacher, setTeacher] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherDetails = async () => {
      try {
        const response = await axios.get(`https://your-api-url.com/api/teacherDetails/getteacher/${id}`);
        setTeacher(response.data.user);
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
    return <div>Error loading profile: {error}</div>;
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
