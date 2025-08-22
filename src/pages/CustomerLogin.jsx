import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";

function CustomerLogin() {
  return (
    <div className="min-h-screen pt-20 py-10 flex items-start justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md shadow-orange-400/50 p-8 transform transition duration-700 hover:scale-105">
        <h1 className="text-3xl font-bold text-orange-500 mb-6 text-center drop-shadow-md">
          Customer Portal Login
        </h1>

        {/* Form */}
        <form className="flex flex-col gap-5">
          {/* Username */}
          <div className="relative">
            <FaUserAlt className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" />
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md cursor-pointer hover:shadow-lg"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerLogin;
