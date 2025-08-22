import { useEffect, useState } from "react";
import Hero from "../layout/home/Hero";
import Services from "../layout/home/Services";
import CustomersCount from "../layout/home/CustomersCount";
import Testimonial from "../layout/home/Testimonial";
import FAQ from "../layout/home/FAQ";

import Image1 from "/cargo-ship.jpg";
import Image2 from "/cargo-lorry.jpg";
import Image3 from "/cargo-plane.jpg";

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [Image1, Image2, Image3];
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const indexInterval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(indexInterval);
  }, [images.length]);
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-[calc(100vh-4.2rem)] flex flex-col justify-center items-center overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 inset-0 bg-center bg-cover filter brightness-40 transition-opacity duration-2000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}

        <Hero />
      </div>
      <Services />
      <CustomersCount />
      <Testimonial />
      <FAQ />
    </div>
  );
}

export default Home;
