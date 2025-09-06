import { Link, useLocation } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

function Header({ toggleMenu, isOpen }) {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 flex justify-between items-center py-4 px-5 md:px-8 text-orange-400 bg-orange-50 shadow-md">
      {/* Logo / Brand */}
      <Link
        to="/"
        className="text-3xl font-bold text-orange-500 tracking-wide hover:opacity-90 transition"
      >
        Yoyo<span className="text-gray-700">Track</span>
      </Link>

      {/* Right Side */}
      {pathname.split("/")[1] !== "dashboard" && (
        <div className="flex items-center gap-6">
          {/* Email Contact */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer hover:underline">
            <MdEmail />
            <a href="mailto:support@yoyotrack.com">support@yoyotrack.com</a>
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
      )}
    </header>
  );
}

export default Header;
