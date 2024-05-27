import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://umwarimu-loan-hub-api.onrender.com/api/teacher/logout");
      console.log(response.data); // Logging the response data upon successful logout
      
      navigate('/');
    } catch (error) {
      console.error('Error during logout:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <button onClick={handleLogout} className='p-3 m-2 rounded-md text-md hover:bg-white hover:text-red-500'>
      Logout
    </button>
  );
}

export default Logout;
