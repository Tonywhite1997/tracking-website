import { FaWarehouse, FaPlane, FaShip, FaCar } from "react-icons/fa";
import Card from "../../../UI/Card";

function Services() {
  return (
    <div className=" flex flex-col justify-center items-center gap-3 py-10">
      <h1 className="text-3xl font-bold relative inline-block  after:content-[''] after:block after:w-1/2 after:border-b-4 after:border-orange-400 after:mt-1">
        Our Services
      </h1>
      <div className="flex justify-center items-center gap-0.5 px-5 py-10 flex-wrap">
        <Card
          Icon={FaWarehouse}
          title={"Warehousing"}
          description="Hello world"
        />
        <Card Icon={FaPlane} title={"Air Freight"} description="Hello world" />
        <Card Icon={FaShip} title={"Ocean Freight"} description="Hello world" />
        <Card Icon={FaCar} title={"Road Freight"} description="Hello world" />
      </div>
    </div>
  );
}

export default Services;
