import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav({ isOpen, toggleMenu }) {
  const currentPage = useLocation().pathname;

  const linkClasses = (path) =>
    `cursor-pointer border-b-2 md:border-b-0 border-gray-200 transition-colors ${
      currentPage === path
        ? "text-orange-400"
        : "text-black hover:border-orange-400 hover:text-orange-400"
    }`;

  return (
    <nav
      className={`${
        isOpen ? "max-h-60" : "max-h-0"
      } md:max-h-full transition-all duration-300 ease-in-out overflow-hidden
    bg-white shadow-md 
    fixed top-[68px] left-0 w-full z-50 md:top-[68px]`}
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-5 md:px-8 py-4 md:py-2 font-medium">
        <Link to="/" className={linkClasses("/")} onClick={toggleMenu}>
          Track
        </Link>
        <Link
          to="/services"
          className={linkClasses("/services")}
          onClick={toggleMenu}
        >
          Our Services
        </Link>
        <Link
          to="/customer-support"
          className={linkClasses("/customer-support")}
          onClick={toggleMenu}
        >
          Customer Support
        </Link>
        <Link
          to="/login"
          className={linkClasses("/login")}
          onClick={toggleMenu}
        >
          Customer Portal Login
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
