const Hero = ({ currentPage, isDarkTheme, isWebTheme, lang }) => {
  const labels = {
    pl: {
      home: "strefa kreatywna",
      gallery: "historie wizualne",
      collections: "serie wizualne",
      audio: "muzyka",
      websites: "strony",
      contact: "kontakt"
    },
    en: {
      home: "creative outlet",
      gallery: "visual stories",
      collections: "visual series",
      audio: "music",
      websites: "websites",
      contact: "contact"
    }
  };

  const discipline = labels[lang]?.[currentPage] || labels[lang]?.gallery;

  return (
    <section
      className={`h-[60vh] md:h-[60vh] flex items-center px-6 md:px-12 transition-colors duration-500 ${
        isDarkTheme
          ? "bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900"
          : isWebTheme
            ? "bg-gradient-to-b from-[#efe3d1] via-[#e8d8c2] to-[#e1cfb3]"
            : "bg-white"
      }`}
    >
      <div>
        <h1 className="text-6xl md:text-8xl font-light tracking-tight">
          mikołaj koper
        </h1>

        <p
          className={`mt-6 tracking-widest uppercase text-sm transition-all duration-300 ${
            isDarkTheme
              ? "text-zinc-400"
              : isWebTheme
                ? "text-[#8c7350]"
                : "text-gray-500"
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