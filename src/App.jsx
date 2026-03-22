import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Collections from "./components/Collections";
import Contact from "./components/Contact";

function App() {
  const [page, setPage] = useState("gallery");
  const [displayPage, setDisplayPage] = useState("gallery");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (page !== displayPage) {
      setIsAnimating(true);

      setTimeout(() => {
        setDisplayPage(page);
        setIsAnimating(false);
      }, 250);
    }
  }, [page]);

  return (
    <div className="bg-white text-black">
      <Navbar setPage={setPage} />
      <Hero />

      <div
        className={`transition-all duration-300 ${
          isAnimating
            ? "opacity-0 -translate-y-4"
            : "opacity-100 translate-y-0"
        }`}
      >
        {displayPage === "gallery" && <Gallery />}
        {displayPage === "collections" && <Collections />}
        {displayPage === "contact" && <Contact />}
      </div>
    </div>
  );
}

export default App;