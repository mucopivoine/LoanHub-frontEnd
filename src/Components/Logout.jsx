import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
//import { AuthContext } from '../context/AuthContext'; // Assuming you have an AuthContext

function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext); // Assuming you have a setAuth method to update authentication status
  const logoutEndpoints = [
    'https://umwarimu-loan-hub-api.onrender.com/api/teacher/logout',
    'https://umwarimu-loan-hub-api.onrender.com/api/manager/logout',
    'https://umwarimu-loan-hub-api.onrender.com/api/user/logout'
  ];
  const cookie = document.cookie.split('jwt=')[1];
  const handleLogout = async (e) => {
    e.preventDefault();
    for (const endpoint of loginEndpoints) {
    try {
      const response = await axios.post(  endpoint, {},{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${cookie}`,
        },
         withCredentials: true });
      console.log(response.data); // Logging the response data upon successful logout
      
      // Clear authentication status
      document.cookie = 'jwt=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
      localStorage.removeItem('jwt');
      showError(data.message, '#10E956', 3000)
      setAuth(false);
  
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
  }};

  return (
    <>
    <button onClick={handleLogout} className='p-3 m-2 rounded-md text-md hover:bg-white hover:text-red-500'>
      Logout
    </button>
    <Search onClick={handleLogout}/>
    </>
  );
}

export default Logout;
