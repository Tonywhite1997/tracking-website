import React from "react";
import { FaWarehouse } from "react-icons/fa";
import Card from "../../../UI/Card";

function Services() {
  return (
    <div className="h-24">
      services
      <Card
        Icon={FaWarehouse}
        title={"Warehousing"}
        description="Hello world"
      />
    </div>
  );
}

export default Services;
