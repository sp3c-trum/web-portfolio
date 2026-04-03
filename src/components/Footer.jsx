const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "SoundCloud", href: "https://soundcloud.com" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Behance", href: "https://behance.net" }
];

const Footer = ({ isDarkTheme = false, lang = "pl" }) => {
  const year = new Date().getFullYear();
  const copy = {
    pl: {
      tagline: "Fotografia i muzyka tworzone z myślą o atmosferze.",
      rights: "Wszelkie prawa zastrzeżone.",
      summary: "Kierunek wizualny i dźwięk w jednym portfolio."
    },
    en: {
      tagline: "Photography and music created with atmosphere in mind.",
      rights: "All rights reserved.",
      summary: "Visual direction and sound crafted in one portfolio."
    }
  };
  const t = copy[lang] || copy.pl;

  return (
    <footer
      className={`mt-24 border-t transition-colors duration-500 ${
        isDarkTheme
          ? "border-zinc-800 bg-gradient-to-b from-zinc-950 to-black"
          : "border-zinc-200 bg-gradient-to-b from-white to-zinc-50"
      }`}
    >
      <div className="max-w-[88rem] mx-auto px-6 sm:px-10 lg:px-14 py-12 sm:py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p
              className={`text-xs uppercase tracking-[0.28em] ${
                isDarkTheme ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              Mikołaj Koper
            </p>
            <p
              className={`mt-4 text-xl sm:text-2xl max-w-md leading-snug ${
                isDarkTheme ? "text-zinc-100" : "text-zinc-900"
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
                    : "border-zinc-300 text-zinc-600 hover:text-black hover:border-zinc-700"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-current/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className={`text-xs ${isDarkTheme ? "text-zinc-500" : "text-zinc-400"}`}>
            {year} Mikołaj Koper. {t.rights}
          </p>
          <p className={`text-xs ${isDarkTheme ? "text-zinc-500" : "text-zinc-400"}`}>
            {t.summary}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;