import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Assuming you're using React Router for routing

function AddTeacherdtl() {
  const { id } = useParams(); // Extract the teacher ID from the URL parameters
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [teacher_ID, setTeacherid] = useState('');
  const [teacheridErr, setTeacheridErr] = useState('');
  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [fullName, setfullName] = useState('');
  const [fullNameErr, setfullNameErr] = useState('')
  const [workSchool, setworkSchool] = useState('');
  const [workSchoolErr, setworkSchoolErr] = useState('')
  const [monthlySalary, setmonthlySalary] = useState('');
  const [monthlySalaryErr, setmonthlySalaryErr] = useState('')
  const navigate = useNavigate();
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  
  const isValid = () => {
    let valid = true
    if (!fullName.trim()) {
        setfullNameErr('Full name  is required');
      valid = false
    } else {
        setfullNameErr('');
    }
    if (!teacher_ID.trim()) {
      setTeacheridErr('teacher id is required');
      valid = false
    } else {
      setTeacheridErr(" ")
    }
    if (!workSchool.trim()) {
        setworkSchoolErr('School name is required');
      valid = false
    } else {
        setworkSchoolErr(" ");
    }
   
     if (!monthlySalary.trim()) {
        setmonthlySalaryErr('Monthly salary is required')
      valid = false
    } else {
        setmonthlySalaryErr('')
    }
    if (!email.trim()) {
        setEmailErr('Email is required')
        valid = false
      } else if (!isValidEmail(email)) {
        setEmailErr('Email is invalid')
        valid = false
      } else {
        setEmailErr('')
      }

   return valid
    };



  useEffect(() => {
    const fetchTeacherDetails = async () => {
      try {
        const response = await fetch(`https://umwarimu-loan-hub-api.onrender.com/api/teacherDetails/add`);
        if (!response.ok) {
          throw new Error('Failed to fetch teacher details');
        }
        const data = await response.json();
        setTeacherid(data);
        setTimeout(() => {
            navigate('/barnav/teacherDetails');
        }, 3000)
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
        <p><strong>Teacher ID:</strong> {teacher.teacher_ID}</p>
        <p><strong>Monthly Salary:</strong> {teacher.monthlySalary}</p>
        {/* Add more fields as needed */}
      </div>
    </div>
  );
}

export default AddTeacherdtl;
