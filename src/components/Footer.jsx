const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/m1kolajk0per/" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Behance", href: "https://behance.net" }
];

const Footer = ({ isDarkTheme = false, isWebTheme = false, lang = "pl" }) => {
  const year = new Date().getFullYear();
  const copy = {
    pl: {
      tagline: "Kierunek kreatywny łączący obraz, dźwięk i doświadczenia webowe.",
      rights: "Wszelkie prawa zastrzeżone.",
      summary: "Strefa kreatywna dla samego siebie oraz twórców i projektów, które potrzebują charakteru."
    },
    en: {
      tagline: "Creative direction combining visuals, sound, and web experiences.",
      rights: "All rights reserved.",
      summary: "A creative outlet for me, creators, and projects that need character."
    }
  };
  const t = copy[lang] || copy.pl;

  return (
    <footer
      className={`mt-24 border-t transition-colors duration-500 ${
        isDarkTheme
          ? "border-zinc-800 bg-gradient-to-b from-zinc-950 to-black"
          : isWebTheme
            ? "border-[#cfbb9e] bg-gradient-to-b from-[#efe3d1] to-[#e3cfb3]"
            : "border-zinc-200 bg-gradient-to-b from-white to-zinc-50"
      }`}
    >
      <div className="max-w-[88rem] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p
              className={`text-xs uppercase tracking-[0.28em] ${
                isDarkTheme ? "text-zinc-500" : isWebTheme ? "text-[#8c7350]" : "text-zinc-400"
              }`}
            >
              Mikołaj Koper
            </p>
            <p
              className={`mt-4 text-xl sm:text-2xl max-w-md leading-snug ${
                isDarkTheme ? "text-zinc-100" : isWebTheme ? "text-[#2f2316]" : "text-zinc-900"
              }`}
            >
              {t.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition duration-300 ${
                  isDarkTheme
                    ? "border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-400"
                    : isWebTheme
                      ? "border-[#c5ad8b] text-[#7a6346] hover:text-[#2f2316] hover:border-[#8c7350]"
                    : "border-zinc-300 text-zinc-600 hover:text-black hover:border-zinc-700"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-current/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className={`text-xs ${isDarkTheme ? "text-zinc-500" : isWebTheme ? "text-[#8c7350]" : "text-zinc-400"}`}>
            {year} Mikołaj Koper. {t.rights}
          </p>
          <p className={`text-xs ${isDarkTheme ? "text-zinc-500" : isWebTheme ? "text-[#8c7350]" : "text-zinc-400"}`}>
            {t.summary}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;