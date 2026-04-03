const Websites = ({ lang = "pl", setPage }) => {
  const copy = {
    pl: {
      label: "Portfolio stron",
      title: "Strony internetowe, które nie wyglądają jak szablon.",
      intro:
        "Projektuję i wdrażam nowoczesne strony dla twórców, marek osobistych i małych biznesów. Ten serwis jest żywym przykładem mojego podejścia: estetyka, płynność, klarowny przekaz i wynik.",
      caseTitle: "Case study: ta strona",
      casePoints: [
        "Dwujęzyczne doświadczenie (PL/EN) bez zbędnej złożoności.",
        "Spójna tożsamość między warstwą wizualną, audio i web.",
        "Wydajność i responsywność z naciskiem na płynne interakcje."
      ],
      processTitle: "Jak pracuję",
      timelineTitle: "Typowy timeline wdrożenia",
      timeline: [
        { range: "Dzień 1-2", phase: "Briefing", detail: "Zakres, cele, struktura i referencje wizualne." },
        { range: "Dzień 3-6", phase: "Projekt", detail: "Makieta, styl i kierunek interakcji." },
        { range: "Tydzień 2", phase: "Wdrożenie", detail: "Implementacja, responsywność i optymalizacje." },
        { range: "Koniec tyg. 2", phase: "Publikacja", detail: "Testy, poprawki i publikacja." }
      ],
      process: [
        { step: "01", title: "Kierunek", text: "Krótki briefing: cel strony, odbiorca, styl i priorytety." },
        { step: "02", title: "Projekt", text: "Projekt wizualny oparty o charakter marki i konkretną narrację." },
        { step: "03", title: "Wdrożenie", text: "Szybkie wdrożenie, animacje, podejście mobile-first, podstawowe SEO." },
        { step: "04", title: "Publikacja", text: "Finalne poprawki, publikacja i przygotowanie pod dalszy rozwój." }
      ],
      offerTitle: "Co mogę zrobić dla Ciebie",
      offer: ["Strona lądowania", "Portfolio twórcy", "Strona usługowa", "Odświeżenie istniejącej strony"],
      ctaTitle: "Chcesz stronę, która naprawdę sprzedaje Twoją pracę?",
      ctaText: "Napisz do mnie i opowiedz, co chcesz zbudować. Przygotuję kierunek i realny plan działania.",
      ctaButton: "Zacznijmy współpracę"
    },
    en: {
      label: "Web Portfolio",
      title: "Websites that do not feel like templates.",
      intro:
        "I design and build modern websites for creators, personal brands, and small businesses. This portfolio itself is a live case study of my approach: aesthetics, smooth UX, clear messaging, and conversion intent.",
      caseTitle: "Case study: this website",
      casePoints: [
        "Bilingual experience (PL/EN) without unnecessary complexity.",
        "Consistent identity across visual, audio, and web layers.",
        "Performance-focused and responsive with smooth interactions."
      ],
      processTitle: "How I work",
      timelineTitle: "Typical delivery timeline",
      timeline: [
        { range: "Day 1-2", phase: "Brief", detail: "Scope, goals, structure, and visual references." },
        { range: "Day 3-6", phase: "Design", detail: "Layout, style direction, and interaction flow." },
        { range: "Week 2", phase: "Development", detail: "Implementation, responsiveness, and optimization." },
        { range: "End of week 2", phase: "Launch", detail: "Testing, refinements, and release." }
      ],
      process: [
        { step: "01", title: "Direction", text: "Quick brief: business goal, audience, style, and priorities." },
        { step: "02", title: "Design", text: "Visual concept built around brand personality and clear storytelling." },
        { step: "03", title: "Build", text: "Fast implementation, motion polish, mobile-first, basic SEO." },
        { step: "04", title: "Launch", text: "Final refinements, release, and setup for future growth." }
      ],
      offerTitle: "What I can build for you",
      offer: ["Landing page", "Creator portfolio", "Service website", "Redesign of existing site"],
      ctaTitle: "Need a website that actually sells your work?",
      ctaText: "Send me a message with your idea. I will prepare a clear direction and practical build plan.",
      ctaButton: "Let us work together"
    }
  };

  const t = copy[lang] || copy.pl;

  return (
    <section className="px-6 sm:px-10 lg:px-12 pt-8 sm:pt-12 pb-24">
      <div className="max-w-[88rem] mx-auto">
        <div className="rounded-3xl border border-[#c8b89b] bg-gradient-to-br from-[#f4eee2] via-[#ebdfcf] to-[#dcc7ad] p-3 sm:p-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10">
          <article className="rounded-3xl border border-[#d4c3a7] bg-gradient-to-br from-[#fcf9f4] to-[#f0e4d3] p-7 sm:p-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[#8c7350] mb-4">{t.label}</p>
            <h2 className="text-3xl sm:text-5xl leading-tight max-w-3xl text-[#2f2316]">{t.title}</h2>
            <p className="mt-6 text-[#5f4a32] leading-relaxed max-w-2xl">{t.intro}</p>

            <div className="mt-8 rounded-2xl border border-[#d8c6a7] bg-[#fffaf1]/80 p-5 sm:p-6">
              <h3 className="text-lg mb-4 text-[#2f2316]">{t.caseTitle}</h3>
              <div className="space-y-3">
                {t.casePoints.map((point) => (
                  <p key={point} className="text-sm text-[#5f4a32] leading-relaxed">
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </article>

          <aside className="rounded-3xl border border-[#d4c3a7] bg-[#f8f1e5] p-7 sm:p-8">
            <h3 className="text-xs uppercase tracking-[0.22em] text-[#8c7350] mb-6">{t.offerTitle}</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {t.offer.map((item) => (
                <span key={item} className="px-3 py-1 rounded-full border border-[#c5ad8b] text-xs uppercase tracking-wide text-[#5f4a32]">
                  {item}
                </span>
              ))}
            </div>

            <h3 className="text-xs uppercase tracking-[0.22em] text-[#8c7350] mb-5">{t.processTitle}</h3>
            <div className="space-y-4">
              {t.process.map((item) => (
                <div key={item.step} className="rounded-2xl border border-[#d7c5a8] bg-[#fffaf2] p-4">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[#9f8561] mb-2">{item.step}</p>
                  <p className="text-sm text-[#2f2316] mb-1">{item.title}</p>
                  <p className="text-sm text-[#5f4a32] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-6 rounded-2xl border border-[#d4c3a7] bg-[#fffaf1] p-5 sm:p-6">
          <p className="text-xs uppercase tracking-[0.22em] text-[#8c7350] mb-5">{t.timelineTitle}</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {t.timeline.map((item) => (
              <div key={item.range} className="rounded-xl border border-[#ddcdb1] bg-[#fdf7ee] p-4">
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#9f8561]">{item.range}</p>
                <p className="mt-2 text-sm text-[#2f2316]">{item.phase}</p>
                <p className="mt-2 text-sm text-[#5f4a32] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="mt-8 rounded-3xl border border-black bg-black text-white p-7 sm:p-9">
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
    </section>
  );
};

export default Websites;