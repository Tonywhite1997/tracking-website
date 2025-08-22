import { Link } from "react-router-dom";
function Card({ Icon, title, description }) {
  return (
    <div
      className="group w-65 p-7 shadow-lg bg-white rounded flex flex-col justify-center items-center cursor-pointer 
                transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <Icon className="text-4xl text-orange-400" />
      <h1 className="font-bold">{title}</h1>
      <p className="text-justify line-clamp-3">
        {description} Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Sed cumque veritatis nihil ex asperiores, dolores optio, laboriosam
        vitae maxime suscipit molestias dicta eveniet eligendi. Totam vitae sed
        possimus qui porro?
      </p>
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
