import services from "../helperfuncs/services.js";
import BgImage from "../../public/services-cargo.webp";

function Services() {
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-64 md:h-96 flex items-center justify-center">
        <img
          src={BgImage}
          alt="background image"
          className="absolute filter brightness-40 inset-0 w-full h-full object-cover"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Our Services
        </h1>
      </div>

      <div className="max-w-5xl mx-auto py-16 px-6 flex flex-col gap-12">
        {services.map((service, idx) => (
          <div key={idx}>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">
              {service.title}
            </h2>
            <p className="text-gray-800 text-lg md:text-xl leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
