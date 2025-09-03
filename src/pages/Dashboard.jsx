import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import {
  FaBox,
  FaBoxes,
  FaUser,
  FaLock,
  FaBars,
  FaTimes,
  FaUsers,
} from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { LogOut } from "lucide-react";

import Header from "../layout/Header";
import useLogout from "../customHooks/useLogout";
import { useEffect } from "react";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const headerNavHeight = "top-[70px]";

  const { logout, isPending, isSuccess } = useLogout();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <div>
      <Header />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div
          className={`fixed ${headerNavHeight} left-0 h-[calc(100%-70px)] w-64 bg-orange-100 p-6 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
        >
          {/* Close button (mobile only) */}
          <div className="flex justify-between items-center mb-6 md:hidden">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <button onClick={() => setIsOpen(false)} className="cursor-pointer">
              <FaTimes size={20} />
            </button>
          </div>

          {/* Links */}
          <NavLink
            to="/dashboard/my-orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition w-full ${
                isActive ? "bg-orange-600" : "hover:bg-orange-400"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaBox /> My Orders
          </NavLink>

          <NavLink
            to="/dashboard/new-order"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition w-full ${
                isActive ? "bg-orange-600" : "hover:bg-orange-400"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FiPlusCircle /> New Order
          </NavLink>

          <NavLink
            to="/dashboard/sign-up"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition w-full ${
                isActive ? "bg-orange-600" : "hover:bg-orange-400"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaUser /> New User
          </NavLink>

          <NavLink
            to="/dashboard/all-orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition w-full ${
                isActive ? "bg-orange-600" : "hover:bg-orange-400"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaBoxes /> All Orders
          </NavLink>

          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition w-full ${
                isActive ? "bg-orange-600" : "hover:bg-orange-400"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaUsers /> Users
          </NavLink>

          <NavLink
            to="/dashboard/password"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition w-full ${
                isActive ? "bg-orange-600" : "hover:bg-orange-400"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaLock /> Change Password
          </NavLink>

          <button
            className=" w-full rounded-md p-1 flex items-center gap-3 pl-4 cursor-pointer hover:bg-orange-400"
            onClick={logout}
          >
            <LogOut className="w-5 h-5" />
            {isPending ? "Logging out..." : "Logout"}
          </button>
        </div>

        {/* Hamburger button (mobile only) */}
        {!isOpen && (
          <button
            className={`md:hidden fixed ${headerNavHeight} left-1 z-50 bg-orange-500 text-white p-2 rounded-md shadow-md cursor-pointer`}
            onClick={() => setIsOpen(true)}
          >
            <FaBars size={20} />
          </button>
        )}

        {/* Overlay when sidebar is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-transparent bg-opacity-40 z-30 md:hidden"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        {/* Content Area */}
        <div className={`flex-1 p-6 md:ml-64 mt-[20px]`}>
          <Outlet /> {/* 👈 nested routes render here */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
