import { Link } from "react-router-dom";
function Card({ Icon, title, description }) {
  return (
    <div
      className="group w-full p-7 shadow-md shadow-orange-300/50 bg-white rounded flex flex-col justify-center items-center cursor-pointer 
                transform transition duration-300 hover:scale-105 hover:shadow-2xl md:w-65"
    >
      <div className="text-6xl mb-4">{Icon}</div>
      <h1 className="font-bold">{title}</h1>
      <p className="text-center line-clamp-3">{description}</p>
      <Link
        to="/services"
        className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-400 text-2xl mt-2 
                  transition duration-300 group-hover:bg-orange-400 group-hover:text-white"
      >
        <p className="mb-1">&rarr;</p>
      </Link>
    </div>
  );
}

export default Card;
