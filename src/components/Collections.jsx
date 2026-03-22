import { useState } from "react";
import { images } from "../data/images";

const Collections = () => {
    const collections = [
    ...new Set(images.flatMap(img => img.collections || []))
    ].filter(col => col !== "featured");

  const [selectedCollection, setSelectedCollection] = useState(collections[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChange = (col) => {
    if (col === selectedCollection) return;

    setIsAnimating(true);

    setTimeout(() => {
      setSelectedCollection(col);
      setIsAnimating(false);
    }, 200);
  };

    const filteredImages = images
    .filter(img => img.collections?.includes(selectedCollection))
    .sort((a, b) => b.id - a.id);

  return (
    <section className="flex px-12 pb-24 gap-12">
      
      {/* LEWA STRONA — LISTA */}
      <div className="w-1/4 min-w-[180px]">
        <h2 className="mb-6 text-sm text-gray-400 uppercase tracking-widest">
          Collections
        </h2>

        <div className="space-y-4">
          {collections.map((col) => (
            <button
              key={col}
              onClick={() => handleChange(col)}
              className={`block text-left text-lg transition ${
                selectedCollection === col
                  ? "text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {col}
            </button>
          ))}
        </div>
      </div>

      {/* PRAWA STRONA — GALERIA */}
      <div className="flex-1">
        <div
          className={`columns-1 sm:columns-2 lg:columns-3 gap-10 transition-all duration-300 ${
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
          }`}
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="mb-10 break-inside-avoid transition duration-500 hover:scale-[1.03]"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;