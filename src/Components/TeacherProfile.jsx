import React from 'react';

const TeacherProfile = ({ teacher }) => {
    if (!teacher || !teacher.profilePicture) {
        // Handle case where teacher or profilePicture is undefined
        return null; // Or render a placeholder or loading message
      }
  return (
    <div className="profile-section">
      <div className="profile-header">
        <img src={teacher.profilePicture} alt="Profile" className="profile-picture" />
        <div className="profile-info">
          <h2>{teacher.name}</h2>
          <p>{teacher.role}</p>
          <button>Edit Profile</button>
        </div>
      </div>
      <div className="profile-details">
        <h3>Teacher ID: {teacher.id}</h3>
        <p>Contact: {teacher.email}</p>
        <p>Department: {teacher.department}</p>
        <p>Tenure: {teacher.tenure} years</p>
      </div>
    </div>
  );
};

export default TeacherProfile;
