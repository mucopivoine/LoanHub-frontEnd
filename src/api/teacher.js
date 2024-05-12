import axios from 'axios';
const API = import.meta.env.VITE_BASE_API;

export const SigningUp = async (signupData) => {
    try {
        const response = await axios.post(`${API}/teacher/signup`, signupData);
        console.log(response.data.message);
        return response.data
    } catch (err) {
        console.log(err);
        throw err;
    }
};

