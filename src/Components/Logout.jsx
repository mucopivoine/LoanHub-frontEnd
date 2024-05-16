import React from 'react'

function Logout() {
  const handleLogout = async (e) => {
    e.preventDefault();
     
       await axios({
        method:'POST',
        url:"https://umwarimu-loan-hub-api.onrender.com/api/teacher/login",
        headers:{
          "Content-Type": 'application/json',
        },
        data:{
          email: email,
            password: password,
        }
      }).then ((response) => {
        console.log(response.data);
      })
      .catch((error)=>{
        console.log(error)
      })
     }




  return (
    <div>

    </div>
  )
}

export default Logout