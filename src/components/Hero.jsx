const Hero = ({ currentPage, isDarkTheme, lang }) => {
  const labels = {
    pl: {
      gallery: "fotografia",
      collections: "fotografia",
      audio: "muzyka",
      contact: "kontakt"
    },
    en: {
      gallery: "photography",
      collections: "photography",
      audio: "music",
      contact: "contact"
    }
  };

  const discipline = labels[lang]?.[currentPage] || labels[lang]?.gallery;

  return (
    <section
      className={`h-[60vh] md:h-[60vh] flex items-center px-6 md:px-12 transition-colors duration-500 ${
        isDarkTheme
          ? "bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900"
          : "bg-white"
      }`}
    >
      <div>
        <h1 className="text-6xl md:text-8xl font-light tracking-tight">
          mikołaj koper
        </h1>

        <p
          className={`mt-6 tracking-widest uppercase text-sm transition-all duration-300 ${
            isDarkTheme ? "text-zinc-400" : "text-gray-500"
          }`}
          key={discipline}
        >
          {discipline}
        </p>
      </div>
    </section>
  );
};

export default Hero;