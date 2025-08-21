import React from "react";
import Header from "../layout/Header";
import Nav from "../layout/Nav";
import Hero from "../layout/home/Hero";
import Services from "../layout/home/Services";

function Home({ images, currentIndex }) {
  return (
    <div className="flex flex-col h-screen w-full ">
      <Header />
      <Nav />
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover filter brightness-40 top-29 transition-opacity duration-2000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${src})` }}
        />
      ))}

      <Hero />
      {/* <Services /> */}
    </div>
  );
}

export default Home;
