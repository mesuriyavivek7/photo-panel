import React, { useState } from "react";
import IMG1 from '../assets/loginpagemain.jpg';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Section */}
      <div className="flex-1 relative">
        <img
          src={IMG1}
          alt="Login Illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white flex flex-col justify-center p-8 shadow-sm">
        <h1 className="font-playwrite text-3xl text-center text-blue-900 mb-10">Photo-Panel</h1>
    
        <form onSubmit={handleLogin} className="flex px-12 flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-blue-900 font-semibold text-base">Username </label>
            <input
              type="email"
              placeholder="Enter your Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2.5 border-2 border-gray-300 rounded-lg w-full text-sm outline-none"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-blue-900 font-semibold text-base">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2.5 border-2 border-gray-300 rounded-lg w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex place-content-end items-center mb-4">
        
            <div className="text-sm">
              <a href="#create" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-900 text-white p-3 rounded-lg cursor-pointer text-sm hover:bg-green-700 transition duration-300 ease-in-out w-36 mx-auto"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
