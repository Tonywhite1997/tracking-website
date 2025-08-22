import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./layout/Header";
import Nav from "./layout/Nav";
import Footer from "./layout/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="min-h-dvh flex flex-col">
      <Header toggleMenu={toggleMenu} isOpen={isOpen} />
      <Nav toggleMenu={toggleMenu} isOpen={isOpen} />
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
