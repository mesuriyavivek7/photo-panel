import React, { useState } from "react";
import axios from 'axios'

//Importing images
import IMG1 from '../assets/loginpagemain.jpg';

import Notification from "../components/Notification";

//Importing icons
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

function Login() {

  const [notification,setNotification]=useState(null)

  //for showing notification
  const showNotification=(message,type)=>{
    setNotification({message,type})
  }

   const [formData,setFormData] = useState({
       username:'',
       password:'',
   })

   const [hidePassword,setHidePassword]=useState(true)

   const [errors,setErrrors] = useState({})

   const validateData = () =>{
      let newErrorrs = {}
      if(!formData.username) newErrorrs.username="username is required."
      if(!formData.password) newErrorrs.password="password is required."
      setErrrors(newErrorrs)
      return Object.keys(newErrorrs).length===0 
   }

   const handleChange= (e) =>{
     const {name, value} = e.target
     setFormData((prevData)=>({...prevData,[name]:value}))
   }

  const handleLogin = async (e) => {
    e.preventDefault();
    if(validateData()){
        try{
            const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`,formData,{withCredentials:true})
            console.log('data---->',response)
            showNotification("Successfully login",'success')
        }catch(err){
           console.log(err)
           showNotification(err.response.data.message,'failure')
        }
    }

  };

  return (
    <div className="flex h-screen overflow-hidden">
      {notification && <Notification message={notification.message} type={notification.type} onClose={()=>setNotification(null)}></Notification>}
      {/* Left Section */}
      <div className="w-[56%] relative">
        <img
          src={IMG1}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="w-[42%] bg-white flex flex-col justify-center p-8 shadow-sm">
        <h1 className="font-playwrite text-4xl text-center text-blue-900 mb-10">Photo-Panel</h1>
    
        <form onSubmit={handleLogin} className="flex px-12 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-blue-900 font-semibold text-base">Username </label>
            <input
              name="username"
              type="text"
              placeholder="Enter your Username"
              value={formData.username}
              onChange={handleChange}
              className="p-2.5 border-2 border-gray-300 rounded-lg w-full text-sm outline-none"
            />
            {
              errors.username && <span className="text-sm text-red-500">{errors.username}</span>
            }
          </div>

          <div className="relative flex flex-col gap-2">
            <label className="text-blue-900 font-semibold text-base">Password</label>
            <input
              name="password"
              type={hidePassword?"password":"text"}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="p-2.5 border-2 border-gray-300 rounded-lg w-full text-sm outline-none"
            />
            <span onClick={()=>setHidePassword(!hidePassword)} className="absolute right-4 top-10">{hidePassword?<VisibilityOffOutlinedIcon style={{fontSize:'1.4rem'}}></VisibilityOffOutlinedIcon>:<VisibilityOutlinedIcon style={{fontSize:'1.4rem'}}></VisibilityOutlinedIcon>}</span>
            {
              errors.password && <span className="text-sm text-red-500">{errors.password}</span>
            }
          </div>

          <div className="flex place-content-end items-center mb-4">
        
            <div className="text-sm">
              <a href="#create" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white p-3 rounded-lg cursor-pointer text-sm hover:bg-blue-500 transition duration-300 ease-in-out w-36 mx-auto"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
