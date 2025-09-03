import Card from "../../../UI/Card";
import services from "../../helperfuncs/services.js";

function Services() {
  return (
    <div className=" flex flex-col justify-center items-center gap-3 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
      <div className="flex justify-center items-center gap-0.5 px-5 py-10 flex-wrap">
        {services.map((service) => (
          <Card
            Icon={service.icon}
            title={service.title}
            description={service.description}
            key={service.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
