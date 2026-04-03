import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Collections from "./components/Collections";
import Contact from "./components/Contact";
import Audio from "./components/Audio";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("gallery");
  const [displayPage, setDisplayPage] = useState("gallery");
  const [lang, setLang] = useState("pl");
  const isAnimating = page !== displayPage;
  const isDarkTheme = displayPage === "audio" || displayPage === "contact";

  useEffect(() => {
    if (page !== displayPage) {
      const timer = setTimeout(() => {
        setDisplayPage(page);
      }, 250);

      return () => clearTimeout(timer);
    }
  }, [page, displayPage]);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDarkTheme
          ? "bg-zinc-950 text-zinc-100"
          : "bg-white text-black"
      }`}
    >
      <Navbar
        setPage={setPage}
        currentPage={displayPage}
        isDarkTheme={isDarkTheme}
        lang={lang}
        setLang={setLang}
      />
      <Hero currentPage={displayPage} isDarkTheme={isDarkTheme} lang={lang} />

      <div
        className={`transition-all duration-300 ${
          isAnimating
            ? "opacity-0 -translate-y-4"
            : "opacity-100 translate-y-0"
        }`}
      >
        {displayPage === "gallery" && <Gallery lang={lang} />}
        {displayPage === "audio" && <Audio lang={lang} />}
        {displayPage === "collections" && <Collections lang={lang} />}
        {displayPage === "contact" && <Contact isDarkTheme={isDarkTheme} lang={lang} />}
      </div>

      <Footer isDarkTheme={isDarkTheme} lang={lang} />
    </div>
  );
}

export default App;