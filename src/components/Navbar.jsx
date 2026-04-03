const Navbar = ({ setPage, currentPage, isDarkTheme, isWebTheme, lang, setLang }) => {
  const navItems = ["home", "gallery", "collections", "audio", "websites", "contact"];
  const labels = {
    pl: {
      home: "start",
      gallery: "fotografia",
      collections: "serie",
      audio: "muzyka",
      websites: "strony",
      contact: "kontakt"
    },
    en: {
      home: "home",
      gallery: "visual",
      collections: "series",
      audio: "audio",
      websites: "web",
      contact: "contact"
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-colors duration-500 ${
        isDarkTheme
          ? "bg-zinc-950/70 border-b border-zinc-800/70"
          : isWebTheme
            ? "bg-[#efe3d1]/75 border-b border-[#cfbb9e]/70"
            : "bg-white/70"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-end items-center">
        <div className="flex items-center gap-4 sm:gap-6 text-sm">
          {navItems.map((itemKey) => (
            <button
              key={itemKey}
              onClick={() => setPage(itemKey)}
              className={`transition ${
                currentPage === itemKey
                  ? isDarkTheme
                    ? "text-white"
                    : isWebTheme
                      ? "text-[#2f2316]"
                    : "text-black"
                  : isDarkTheme
                    ? "text-zinc-400 hover:text-zinc-200"
                    : isWebTheme
                      ? "text-[#7a6346] hover:text-[#2f2316]"
                    : "hover:opacity-60"
              }`}
            >
              {labels[lang][itemKey]}
            </button>
          ))}

          <button
            onClick={() => setLang(lang === "pl" ? "en" : "pl")}
            className={`ml-2 px-2.5 py-1 rounded-full border text-xs tracking-widest transition ${
              isDarkTheme
                ? "border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-400"
                : isWebTheme
                  ? "border-[#c5ad8b] text-[#7a6346] hover:text-[#2f2316] hover:border-[#8c7350]"
                  : "border-zinc-300 text-zinc-500 hover:text-black hover:border-zinc-700"
            }`}
            aria-label={lang === "pl" ? "Zmień język" : "Change language"}
          >
            {lang === "pl" ? "EN" : "PL"}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;