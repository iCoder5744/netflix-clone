import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black/50 to-black/75 flex justify-center items-center">
      
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/75 z-0"></div>
      
      {/* Logo */}
      <img src={logo} className="w-[150px] z-10" alt="Netflix Logo" />

      {/* Login/Signup Form */}
      <div className="w-full sm:max-w-[450px] p-6 bg-yellow-400 rounded-md z-10">
        <h1 className="text-2xl font-semibold text-white mb-6 text-start">{signState}</h1>

        {/* Form */}
        <form className="flex flex-col gap-6 items-center">
          {signState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your name"
              className="w-full h-12 bg-[#333] text-white placeholder:text-gray-400 rounded-md mb-4 px-4 text-base outline-none focus:ring-2 focus:ring-red-500"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full h-12 bg-[#333] text-white placeholder:text-gray-400 rounded-md mb-4 px-4 text-base outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-12 bg-[#333] text-white placeholder:text-gray-400 rounded-md mb-4 px-4 text-base outline-none focus:ring-2 focus:ring-red-500"
          />

          <button
            type="submit"
            className="w-full h-12 bg-red-600 text-white rounded-md font-semibold text-base mt-4 hover:bg-red-700 transition duration-200"
          >
            {signState}
          </button>

          <div className="flex justify-between items-center text-sm text-gray-400 mt-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" /> Remember Me
            </label>
            <p className="cursor-pointer hover:underline">Need Help?</p>
          </div>
        </form>

        {/* Toggle between Sign In and Sign Up */}
        <div className="mt-8 text-gray-400 text-sm text-center">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{' '}
              <span
                className="text-white font-medium cursor-pointer hover:underline"
                onClick={() => setSignState("Sign Up")}
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{' '}
              <span
                className="text-white font-medium cursor-pointer hover:underline"
                onClick={() => setSignState("Sign In")}
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
