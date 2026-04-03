import { useMemo, useState } from "react";
import { images } from "../data/images";
import ImageModal from "./ImageModal";
import ImageCard from "./ImageCard";

const preferredOrder = ["architektura", "ulica", "portret", "natura"];

const Collections = ({ lang = "pl" }) => {
  const localize = (value) => {
    if (typeof value === "string") return value;
    return value?.[lang] || value?.pl || value?.en || "";
  };

  const copy = {
    pl: {
      intro: "Kolekcje",
      title: "Selekcje budowane wokół nastroju, miejsca i światła.",
      description:
        "Każda kolekcja grupuje fotografie według charakteru kadru. Wybierz temat i otwórz wybrane ujęcie, by zobaczyć szczegóły.",
      emptyTitle: "Brak kolekcji dodatkowych",
      emptyDescription:
        "Dodaj nowe tagi do pola collections w danych zdjęć, aby zbudować niezależne serie poza sekcją featured.",
      categories: "Kategorie",
      imagesOne: "zdjęcie",
      imagesMany: "zdjęć",
      names: {
        architektura: "architektura",
        ulica: "ulica",
        portret: "portret",
        natura: "natura"
      }
    },
    en: {
      intro: "Collections",
      title: "Curated series built around mood, place, and light.",
      description:
        "Each collection groups photos by visual character. Choose a theme and open a frame to explore the details.",
      emptyTitle: "No additional collections yet",
      emptyDescription:
        "Add new tags to the collections field in your image data to create independent series beyond featured.",
      categories: "Categories",
      imagesOne: "image",
      imagesMany: "images",
      names: {
        architektura: "architecture",
        ulica: "street",
        portret: "portrait",
        natura: "nature"
      }
    }
  };
  const t = copy[lang] || copy.pl;

  const collections = useMemo(
    () =>
      [...new Set(images.flatMap((img) => img.collections || []))]
        .filter((col) => col !== "featured")
        .sort((a, b) => {
          const aIndex = preferredOrder.indexOf(a);
          const bIndex = preferredOrder.indexOf(b);

          if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
          if (aIndex === -1) return 1;
          if (bIndex === -1) return -1;
          return aIndex - bIndex;
        }),
    []
  );

  const [selectedCollection, setSelectedCollection] = useState(collections[0] || null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (col) => {
    if (col === selectedCollection) return;

    setSelectedIndex(null);
    setIsAnimating(true);

    setTimeout(() => {
      setSelectedCollection(col);
      setIsAnimating(false);
    }, 200);
  };

  const filteredImages = useMemo(
    () =>
      images
        .filter((img) => img.collections?.includes(selectedCollection))
        .sort((a, b) => b.id - a.id),
    [selectedCollection]
  );

  const collectionCounts = useMemo(
    () =>
      Object.fromEntries(
        collections.map((col) => [
          col,
          images.filter((img) => img.collections?.includes(col)).length
        ])
      ),
    [collections]
  );

  const selectedLabel = selectedCollection
    ? (t.names[selectedCollection] || selectedCollection).charAt(0).toUpperCase() +
      (t.names[selectedCollection] || selectedCollection).slice(1)
    : t.intro;

  const selectedImage =
    selectedIndex === null || selectedIndex >= filteredImages.length
      ? null
      : filteredImages[selectedIndex];

  const goNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current + 1) % filteredImages.length;
    });
  };

  const goPrev = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current - 1 + filteredImages.length) % filteredImages.length;
    });
  };

  return (
    <>
      <section className="px-6 sm:px-10 lg:px-12 pb-24">
        <div className="max-w-[88rem] mx-auto">
          <div className="mb-10 sm:mb-12 flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">
              {t.intro}
            </p>
            <h2 className="text-3xl sm:text-5xl leading-tight max-w-2xl">
              {t.title}
            </h2>
            <p className="text-zinc-500 max-w-2xl leading-relaxed">
              {t.description}
            </p>
          </div>

          {collections.length === 0 ? (
            <div className="rounded-3xl border border-zinc-200 p-8 sm:p-12 bg-zinc-50">
              <h3 className="text-2xl mb-3">{t.emptyTitle}</h3>
              <p className="text-zinc-500 max-w-2xl leading-relaxed">
                {t.emptyDescription}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
              <aside className="rounded-3xl border border-zinc-200 p-6 sm:p-7 bg-white h-fit lg:sticky lg:top-28">
                <h3 className="text-xs uppercase tracking-[0.22em] text-zinc-400 mb-5">
                  {t.categories}
                </h3>
                <div className="space-y-3">
                  {collections.map((col) => {
                    const count = collectionCounts[col] || 0;
                    const active = selectedCollection === col;

                    return (
                      <button
                        key={col}
                        onClick={() => handleChange(col)}
                        className={`w-full rounded-2xl px-4 py-3 flex items-center justify-between text-left transition ${
                          active
                            ? "bg-black text-white"
                            : "bg-zinc-50 text-zinc-600 hover:bg-zinc-100 hover:text-black"
                        }`}
                      >
                        <span className="capitalize">{t.names[col] || col}</span>
                        <span className={`text-xs ${active ? "text-zinc-300" : "text-zinc-400"}`}>
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </aside>

              <div>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <h3 className="text-2xl sm:text-3xl capitalize">{selectedLabel}</h3>
                  <p className="text-sm text-zinc-500">
                    {filteredImages.length} {filteredImages.length === 1 ? t.imagesOne : t.imagesMany}
                  </p>
                </div>

                <div
                  className={`columns-1 sm:columns-2 xl:columns-3 gap-7 transition-all duration-200 ${
                    isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                  }`}
                >
                  {filteredImages.map((image, index) => (
                    <ImageCard
                      key={image.id}
                      src={image.src}
                      alt={localize(image.title)}
                      className="mb-7"
                      onClick={() => setSelectedIndex(index)}
                      caption={(
                        <>
                          <p className="text-white text-sm">{localize(image.title)}</p>
                          <p className="text-zinc-300 text-xs mt-1">{localize(image.location)}</p>
                        </>
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedIndex(null)}
          onPrev={goPrev}
          onNext={goNext}
          lang={lang}
        />
      )}
    </>
  );
};

export default Collections;