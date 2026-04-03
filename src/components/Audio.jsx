const featuredTracks = [
  {
    id: 1,
    title: "Night Drive (Instrumental)",
    role: {
      pl: "Produkcja, mix, sound design",
      en: "Production, mix, sound design"
    },
    genre: "Alt Pop / Cinematic",
    year: "2026",
    src: "/audio/night-drive.mp3"
  },
  {
    id: 2,
    title: "Waves & Concrete",
    role: {
      pl: "Produkcja, aranżacja",
      en: "Production, arrangement"
    },
    genre: "Lo-fi / Chill",
    year: "2025",
    src: "/audio/waves-and-concrete.mp3"
  },
  {
    id: 3,
    title: "Afterglow Session",
    role: {
      pl: "Beat, nagranie, mix",
      en: "Beat, recording, mix"
    },
    genre: "R&B / Electronic",
    year: "2025",
    src: "/audio/afterglow-session.mp3"
  }
];

const Audio = ({ lang = "pl" }) => {
  const spotifyUrl = "https://open.spotify.com/search/astreum";

  const copy = {
    pl: {
      intro: "Audio Portfolio",
      title: "Muzyka i produkcja jako rozszerzenie mojego języka wizualnego",
      description:
        "Fotografia buduje klimat kadrem. Muzyka dopowiada emocje ruchem, ciszą i napięciem. Tutaj znajdziesz wybrane szkice i finalne formy, które pokazują moje podejście producenckie.",
      tracks: "Wybrane nagrania",
      experience: "Doświadczenie",
      highlights: [
        "Produkcja utworów od szkicu do finalnego master preview",
        "Tworzenie warstw ambient i cinematic pod storytelling wizualny",
        "Współpraca z wokalistami i artystami przy kierunku brzmienia",
        "Dopracowany workflow: selection, arrangement, mix balance"
      ],
      openFor: "Otwarte na",
      badges: ["Produkcja muzyczna", "Sound design", "Koncepcje visual + audio"],
      unsupported: "Twoja przeglądarka nie obsługuje odtwarzacza audio.",
      spotifyLabel: "Spotify",
      spotifyTitle: "astreum",
      spotifyDescription:
        "Posłuchaj mojego profilu na Spotify. To osobna przestrzeń dla mojej muzyki, niezależna od selekcji demo na tej stronie.",
      spotifyButton: "Otwórz profil"
    },
    en: {
      intro: "Audio Portfolio",
      title: "Music and production as an extension of my visual language",
      description:
        "Photography builds atmosphere through the frame. Music adds emotion through movement, silence, and tension. Here you will find selected sketches and final forms that show my production approach.",
      tracks: "Selected tracks",
      experience: "Experience",
      highlights: [
        "Track production from first sketch to final master preview",
        "Building ambient and cinematic layers for visual storytelling",
        "Collaboration with vocalists and artists on sound direction",
        "Refined workflow: selection, arrangement, mix balance"
      ],
      openFor: "Open for",
      badges: ["Music Production", "Sound Design", "Visual + Audio Concepts"],
      unsupported: "Your browser does not support the audio player.",
      spotifyLabel: "Spotify",
      spotifyTitle: "astreum",
      spotifyDescription:
        "Listen to my profile on Spotify. This is a separate space for my music, independent from the demo selections on this page.",
      spotifyButton: "Open profile"
    }
  };
  const t = copy[lang] || copy.pl;

  return (
    <section className="w-full -mt-6 pb-24 bg-gradient-to-b from-zinc-900 via-zinc-950 to-black text-zinc-100">
      <div className="w-full">
        <div className="px-6 sm:px-10 lg:px-12 pt-16 pb-10">
          <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.28em] text-zinc-500 mb-4">
            {t.intro}
          </p>
          <h2 className="text-3xl sm:text-5xl leading-tight max-w-3xl text-zinc-100">
            {t.title}
          </h2>
          <p className="mt-6 text-zinc-400 max-w-2xl leading-relaxed">
            {t.description}
          </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-0 border-t border-zinc-800">
          <div className="p-6 sm:p-10 lg:px-12 bg-zinc-950/40 backdrop-blur-[2px]">
            <div className="max-w-4xl ml-auto mr-auto lg:ml-0 lg:mr-0">
            <h3 className="text-lg uppercase tracking-widest text-zinc-400 mb-8">
              {t.tracks}
            </h3>

            <div className="space-y-6">
              {featuredTracks.map((track) => (
                <article
                  key={track.id}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 sm:p-6 hover:border-zinc-600 hover:bg-zinc-900 transition duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="text-xl mb-2 text-zinc-100">{track.title}</h4>
                      <p className="text-sm text-zinc-400">{track.role[lang] || track.role.pl}</p>
                    </div>

                    <div className="text-right text-xs uppercase tracking-wider text-zinc-400">
                      <p>{track.genre}</p>
                      <p className="mt-1">{track.year}</p>
                    </div>
                  </div>

                  <audio className="w-full" controls preload="none">
                    <source src={track.src} type="audio/mpeg" />
                    {t.unsupported}
                  </audio>
                </article>
              ))}
            </div>
            </div>
          </div>

          <aside className="p-6 sm:p-10 lg:px-12 border-t lg:border-t-0 lg:border-l border-zinc-800 bg-black/40 text-zinc-100">
            <div className="max-w-md">
            <h3 className="text-lg uppercase tracking-widest text-zinc-400 mb-8">
              {t.experience}
            </h3>

            <ul className="space-y-4">
              {t.highlights.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-zinc-300">
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-zinc-800">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 mb-4">
                {t.openFor}
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-zinc-200">
                {t.badges.map((badge) => (
                  <span key={badge} className="px-3 py-1 rounded-full border border-zinc-700">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            </div>
          </aside>
        </div>

        <div className="px-6 sm:px-10 lg:px-12 pt-8">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-zinc-900/70 to-zinc-900/70 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div className="max-w-3xl">
                  <p className="text-xs uppercase tracking-[0.24em] text-emerald-300/80 mb-3">
                    {t.spotifyLabel}
                  </p>
                  <h3 className="text-2xl sm:text-3xl text-zinc-100 mb-3">{t.spotifyTitle}</h3>
                  <p className="text-zinc-300 leading-relaxed">{t.spotifyDescription}</p>
                </div>

                <a
                  href={spotifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-emerald-400 text-emerald-100 text-sm uppercase tracking-widest hover:bg-emerald-400 hover:text-zinc-950 transition duration-300"
                >
                  {t.spotifyButton}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audio;