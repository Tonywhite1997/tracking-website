import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const currentPage = useLocation().pathname;

  return (
    <div className="h-15 px-25 flex justify-between items-center shadow-md font-medium">
      <div className="flex gap-5">
        <Link
          to="/"
          className={`cursor-pointer hover:underline hover:text-orange-400 ${
            currentPage === "/" ? "text-orange-400 underline" : "text-black"
          }`}
        >
          Track
        </Link>
        <Link
          to="/customer-support"
          className={`cursor-pointer hover:underline hover:text-orange-400 ${
            currentPage === "/customer-support"
              ? "text-orange-400 underline"
              : "text-black"
          }`}
        >
          Customer support
        </Link>
      </div>
      <Link
        to="/login"
        className={`cursor-pointer hover:underline hover:text-orange-400 ${
          currentPage === "/login" ? "text-orange-400 underline" : "text-black"
        }`}
      >
        Customer portal login
      </Link>
    </div>
  );
}

export default Nav;
