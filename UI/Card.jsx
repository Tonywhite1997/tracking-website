import React from "react";

function Card({ Icon, title, description }) {
  return (
    <div>
      <Icon />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Card;
