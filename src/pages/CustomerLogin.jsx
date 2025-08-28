import { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useLogin from "../customHooks/useLogin";

function CustomerLogin() {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function getLoginDetails(e) {
    const { name, value } = e.target;

    setLoginDetails((prev) => {
      return { ...prev, [name]: value };
    });
  }

  const { mutation } = useLogin(loginDetails);

  if (mutation.isSuccess) {
    navigate("/dashboard/orders");
  }

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
              type="email"
              placeholder="Email"
              name="email"
              value={loginDetails.email}
              onChange={getLoginDetails}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>
          {/* Password */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-400" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={loginDetails.password}
              onChange={getLoginDetails}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
            />
          </div>
          {mutation.isError ? (
            <small className="text-red-500 text-center">
              {" "}
              {mutation.error?.response?.data?.message}{" "}
            </small>
          ) : null}
          <button
            onClick={mutation.mutate}
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition duration-300 shadow-md cursor-pointer hover:shadow-lg"
          >
            {mutation.isPending ? "Loading..." : "Login In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CustomerLogin;
