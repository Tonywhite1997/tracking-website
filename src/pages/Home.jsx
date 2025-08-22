import { useState } from "react";
import Header from "../layout/Header";
import Nav from "../layout/Nav";
import Hero from "../layout/home/Hero";
import Services from "../layout/home/Services";
import CustomersCount from "../layout/home/CustomersCount";
import Testimonial from "../layout/home/Testimonial";
import FAQ from "../layout/home/FAQ";
import Footer from "../layout/Footer";

function Home({ images, currentIndex }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  return (
    <div className="flex flex-col w-full">
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
      <Nav toggleMenu={toggleMenu} isOpen={isOpen} />
      <div className="relative w-full h-[calc(100vh-4.2rem)] flex flex-col justify-center items-center overflow-hidden">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-1 inset-0 bg-center bg-cover filter brightness-40 transition-opacity duration-2000 ${
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
      <Footer />
    </div>
  );
}

export default Home;
