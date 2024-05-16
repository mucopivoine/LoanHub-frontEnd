// import axios from 'axios';
// const API = import.meta.env.VITE_BASE_API;

import axios from "axios"

// export const SigningUp = async (signupData) => {
//     try {
//         const response = await axios.post(`${API}/teacher/signup`, signupData);
//         console.log(response.data.message);
//         return response.data
//     } catch (err) {
//         console.log(err);
//         throw err;
//     }
// };

const handleSignUp = async () => {
    try {
        axios({
            method: 'POST',
            url: '',
            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Bearer .............'
            },
            data: {
                username,
                email,
                password,
                firstname,
                lastname,
                schoolname,
                phonenumber,
                teacherid,
            }
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    } catch (error) {

    }
}


  // const [message, setMessage] = useState({
  //   type: '',
  //   content: ''
  // });
  // const [error, setError] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   firstname: '',
  //   lastname: '',
  //   schoolname: '',
  //   phonenumber: '',
  //   teacherid:'',
  // });
  // const [signupData, setSignupData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   firstname: '',
  //   lastname: '',
  //   schoolname: '',
  //   phonenumber: '',
  //   teacherid:'',
  // });
  // const [formSubmitted, setFormSubmitted] = useState(false);

  // const handleUsername = (e) => {
  //   setUsername(e.target.value);
  //   setError({ ...error, username: '' });
  // };

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   setError({ ...error, email: '' });
  // };

  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  //   setError({ ...error, password: '' });
  // };

  // const handleFirstname = (e) => {
  //   setFirstname(e.target.value);
  //   setError({ ...error, firstname: '' });
  // };

  // const handleLastname = (e) => {
  //   setLastname(e.target.value);
  //   setError({ ...error, lastname: '' });
  // };

  // const handleSchoolname = (e) => {
  //   setSchoolname(e.target.value);
  //   setError({ ...error, schoolname: '' });
  // };

  // const handlePhonenumber = (e) => {
  //   setPhonenumber(e.target.value);
  //   setError({ ...error, phonenumber: '' });
  // };

 
  // const handleteacherid = (e) => {
  //   setTeacherid(e.target.value);
  //   setError({...error, teacherid:''});
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setFormSubmitted(true);
    

  //   const signupData = {
  //     username: '',
  //     email: '',
  //     password: '',
  //     firstname: '',
  //     lastname: '',
  //     schoolname: '',
  //     phonenumber: '',
  //     teacherid:'',
  //   };

  //   let newErrors = {};
  //   if (!username.trim()) {
  //     newErrors = { ...newErrors, username: 'Enter username' };
  //   }
  //   if (!email.trim() || !email.includes('@gmail.com')) {
  //     newErrors = { ...newErrors, email: 'Email must have name@gmail.com' };
  //   }
  //   if (password.length !== 8) {
  //     newErrors = { ...newErrors, password: 'Password must be 8 characters long' };
  //   }
  //   if (!password.trim()) {
  //     newErrors = { ...newErrors, password: 'Enter password' };
  //   }
  //   if (!firstname.trim()) {
  //     newErrors = { ...newErrors, firstname: 'Enter firstname' };
  //   }
  //   if (!lastname.trim()) {
  //     newErrors = { ...newErrors, lastname: 'Enter lastname' };
  //   }
  //   if (!schoolname.trim()) {
  //     newErrors = { ...newErrors, schoolname: 'Enter schoolname' };
  //   }
  //   if (!phonenumber.trim()) {
  //     newErrors = { ...newErrors, phonenumber: 'Enter phonenumber' };
  //   }
  //   setError(newErrors);

  //   if (Object.values(newErrors).every((val) => val === '')) {
  //     console.log('Logged in successfully');
  //     try {
  //       const response = await SigningUp(signupData); // Assuming SigningUp returns a promise
  //       setMessage({
  //         type: 'success',
  //         content: response.data, // Assuming response contains data field
  //       });
        
  //     } catch (error) {
  //       setMessage({
  //         type: 'error',
  //         content: 'An error occurred while signing up', // Customize error message as needed
  //       });
  //     }
  //   } 
  // }
