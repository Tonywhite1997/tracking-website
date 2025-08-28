import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { FaBox, FaImage, FaLock, FaBars, FaTimes } from "react-icons/fa";

import Header from "../layout/Header";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  const headerNavHeight = "top-[70px]"; // adjust to your header+nav height

  return (
    <div>
      <Header />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <div
          className={`fixed ${headerNavHeight} left-0 h-[calc(100%-70px)] w-64 bg-orange-500 text-white p-6 space-y-6 transform transition-transform duration-300 z-40
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
            to="/dashboard/orders"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition w-full ${
                isActive ? "bg-orange-600" : "hover:bg-orange-400"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaBox /> Orders
          </NavLink>

          <NavLink
            to="/dashboard/images"
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-md transition w-full ${
                isActive ? "bg-orange-600" : "hover:bg-orange-400"
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            <FaImage /> Images
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
