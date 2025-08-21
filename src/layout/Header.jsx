import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Header() {
  return (
    <header className="flex justify-between items-center py-4 text-white px-25 shadow-md bg-orange-400 h-15">
      <Link to="/" className="text-2xl font-bold font-serif">
        FastTrack
      </Link>
      <div className="flex items-center gap-4">
        <div className="flex justify-center items-center gap-1 cursor-pointer hover:underline">
          <FaGlobe />
          <p>USA</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
