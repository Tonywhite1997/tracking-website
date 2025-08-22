import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

function Header({ toggleMenu, isOpen }) {
  return (
    <header className="sticky top-0 z-50 flex justify-between items-center py-4 px-8 shadow-md bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 text-white">
      {/* Logo / Brand */}
      <Link
        to="/"
        className="text-3xl font-bold tracking-wide hover:opacity-90 transition"
      >
        Ship<span className="text-gray-900">Track</span>
      </Link>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Email Contact */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer hover:underline">
          <MdEmail />
          <p>support@shiptrack.com</p>
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:underline">
          <FaGlobe />
          <p>USA</p>
        </div>

        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Header;
