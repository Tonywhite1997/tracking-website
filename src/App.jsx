import { useState, useEffect } from "react";

import Image1 from "/cargo-ship.jpg";
import Image2 from "/cargo-lorry.jpg";
import Image3 from "/cargo-plane.jpg";
import Home from "./pages/Home";

function App() {
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
    <>
      <Home currentIndex={currentIndex} images={images} />
    </>
  );
}

export default App;
