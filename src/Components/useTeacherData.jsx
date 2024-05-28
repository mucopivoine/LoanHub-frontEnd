import { useState, useEffect } from 'react';

const useTeacherData = (id) => {
  const [teacherData, setTeacherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeacherData = async () => {
      try {
        const response = await fetch(`https://umwarimu-loan-hub-api.onrender.com/api/teacher/getOne/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTeacherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchTeacherData();
    } else {
      setTeacherData(null);
      setLoading(false);
    }
  }, [id]);

  return { teacherData, loading, error };
};

export default useTeacherData;