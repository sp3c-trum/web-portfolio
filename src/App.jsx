import { useState, useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Home from "./components/Home";

const Gallery = lazy(() => import("./components/Gallery"));
const Collections = lazy(() => import("./components/Collections"));
const Contact = lazy(() => import("./components/Contact"));
const Audio = lazy(() => import("./components/Audio"));
const Websites = lazy(() => import("./components/Websites"));

function App() {
  const [page, setPage] = useState("home");
  const [displayPage, setDisplayPage] = useState("home");
  const [lang, setLang] = useState("pl");
  const isAnimating = page !== displayPage;
  const isDarkTheme = displayPage === "audio" || displayPage === "contact";
  const isWebTheme = displayPage === "websites";

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
          : isWebTheme
            ? "bg-[#efe3d1] text-[#2f2316]"
            : "bg-white text-black"
      }`}
    >
      <Navbar
        setPage={setPage}
        currentPage={displayPage}
        isDarkTheme={isDarkTheme}
        isWebTheme={isWebTheme}
        lang={lang}
        setLang={setLang}
      />
      <Hero currentPage={displayPage} isDarkTheme={isDarkTheme} isWebTheme={isWebTheme} lang={lang} />

      <div
        className={`transition-all duration-300 ${
          isAnimating
            ? "opacity-0 -translate-y-4"
            : "opacity-100 translate-y-0"
        }`}
      >
        <Suspense fallback={null}>
          {displayPage === "home" && <Home lang={lang} setPage={setPage} />}
          {displayPage === "gallery" && <Gallery lang={lang} />}
          {displayPage === "audio" && <Audio lang={lang} />}
          {displayPage === "websites" && <Websites lang={lang} setPage={setPage} />}
          {displayPage === "collections" && <Collections lang={lang} />}
          {displayPage === "contact" && <Contact isDarkTheme={isDarkTheme} lang={lang} />}
        </Suspense>
      </div>

      <Footer isDarkTheme={isDarkTheme} isWebTheme={isWebTheme} lang={lang} />
    </div>
  );
}

export default App;