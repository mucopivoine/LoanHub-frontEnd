
import axios from 'axios'; // Make sure to import axios

function Logout() {
  const handleLogout = async (e) => {
    e.preventDefault();
     
    try {
      const response = await axios.post("https://umwarimu-loan-hub-api.onrender.com/api/teacher/logout", {
        // Provide any necessary data for the logout request
      });

      console.log(response.data); // Logging the response data upon successful logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );

}
}
export default Logout;
