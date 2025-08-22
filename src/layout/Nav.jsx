import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav({ isOpen, toggleMenu }) {
  const currentPage = useLocation().pathname;

  const linkClasses = (path) =>
    `cursor-pointer hover:underline hover:text-orange-400 ${
      currentPage === path ? "text-orange-400 underline" : "text-black"
    }`;

  return (
    <nav
      className={`sticky top-[68px] z-40 bg-amber-50 shadow-md md:shadow-none transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? "max-h-60" : "max-h-0"
      } md:max-h-full`}
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 px-6 py-4 md:py-2 font-medium">
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
