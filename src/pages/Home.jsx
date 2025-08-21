import Header from "../layout/Header";
import Nav from "../layout/Nav";
import Hero from "../layout/home/Hero";
import Services from "../layout/home/Services";

function Home({ images, currentIndex }) {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Nav />
      <div className="relative w-full h-[calc(100vh-6.5rem)] flex flex-col justify-center items-center overflow-hidden">
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
    </div>
  );
}

export default Home;
