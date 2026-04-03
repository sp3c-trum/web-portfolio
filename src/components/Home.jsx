const Home = ({ lang = "pl", setPage }) => {
  const copy = {
    pl: {
      label: "Strefa kreatywna",
      title: "Tworzę doświadczenia wizualne, dźwiękowe i webowe.",
      intro:
        "To nie jest tylko portfolio fotografa czy producenta. To jeden ekosystem kreatywny, w którym obraz, dźwięk i strona internetowa budują spójną opowieść marki.",
      cards: [
        {
          key: "gallery",
          title: "Wizual",
          text: "Fotografia i kierunek estetyczny, który nadaje ton całemu projektowi.",
          cta: "Zobacz fotografie"
        },
        {
          key: "audio",
          title: "Muzyka",
          text: "Brzmienie, wydania i klimat audio jako integralna część komunikacji.",
          cta: "Przejdź do audio"
        },
        {
          key: "websites",
          title: "Strony",
          text: "Strony internetowe stworzone, by przekuć charakter twórcy w realny efekt.",
          cta: "Oferta stron"
        }
      ],
      summaryTitle: "Dlaczego to działa",
      summary: [
        "Jeden spójny kierunek kreatywny zamiast rozproszonych elementów.",
        "Silny nacisk na estetykę, płynność i czytelny przekaz.",
        "Realne podejście do wdrożenia i komunikacji z odbiorcą."
      ],
      ctaTitle: "Masz projekt, który chcesz pokazać światu?",
      ctaText: "Napisz do mnie. Zaproponuję kierunek, który połączy styl i skuteczność.",
      ctaButton: "Skontaktujmy się"
    },
    en: {
      label: "Creative Outlet",
      title: "I build visual, sonic, and web experiences.",
      intro:
        "This is not only a photographer portfolio or a producer page. It is one creative ecosystem where image, sound, and website work together to tell a clear brand story.",
      cards: [
        {
          key: "gallery",
          title: "Visuals",
          text: "Photography and visual direction that define the overall tone of a project.",
          cta: "View photography"
        },
        {
          key: "audio",
          title: "Music",
          text: "Sound, release strategy, and audio mood as a core communication layer.",
          cta: "Explore audio"
        },
        {
          key: "websites",
          title: "Web",
          text: "Websites designed to turn creative identity into real business outcomes.",
          cta: "Website services"
        }
      ],
      summaryTitle: "Why it works",
      summary: [
        "One unified creative direction instead of disconnected pieces.",
        "Strong focus on aesthetics, flow, and clear messaging.",
        "Practical implementation with audience and conversion in mind."
      ],
      ctaTitle: "Have a project you want to launch right?",
      ctaText: "Send me your idea. I will propose a direction that blends style with results.",
      ctaButton: "Let us talk"
    }
  };

  const t = copy[lang] || copy.pl;

  return (
    <section className="px-6 sm:px-10 lg:px-12 pb-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-stone-100 p-7 sm:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 mb-4">{t.label}</p>
          <h2 className="text-3xl sm:text-5xl leading-tight max-w-4xl">{t.title}</h2>
          <p className="mt-6 text-zinc-600 leading-relaxed max-w-3xl">{t.intro}</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {t.cards.map((card) => (
              <article key={card.key} className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6">
                <h3 className="text-xl mb-3">{card.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed mb-5">{card.text}</p>
                <button
                  onClick={() => setPage(card.key)}
                  className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-zinc-300 text-xs uppercase tracking-[0.16em] text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition duration-300"
                >
                  {card.cta}
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-6">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-5">{t.summaryTitle}</p>
            <div className="space-y-3">
              {t.summary.map((line) => (
                <p key={line} className="text-sm text-zinc-600 leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-black bg-black text-white p-7 sm:p-9">
            <h3 className="text-2xl sm:text-3xl leading-tight max-w-3xl">{t.ctaTitle}</h3>
            <p className="mt-4 text-zinc-300 max-w-3xl leading-relaxed">{t.ctaText}</p>
            <button
              onClick={() => setPage("contact")}
              className="mt-6 inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-sm uppercase tracking-[0.18em] hover:bg-zinc-200 transition duration-300"
            >
              {t.ctaButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;