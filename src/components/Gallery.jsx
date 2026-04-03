import { useMemo, useState } from "react";
import { images } from "../data/images";
import ImageModal from "./ImageModal";
import ImageCard from "./ImageCard";

const Gallery = ({ lang = "pl" }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const localize = (value) => {
    if (typeof value === "string") return value;
    return value?.[lang] || value?.pl || value?.en || "";
  };

  const featuredImages = useMemo(
    () =>
      [...images]
        .filter((img) => img.collections?.includes("featured"))
        .sort((a, b) => b.id - a.id),
    []
  );

  const selectedImage =
    selectedIndex === null ? null : featuredImages[selectedIndex];

  const goNext = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current + 1) % featuredImages.length;
    });
  };

  const goPrev = () => {
    setSelectedIndex((current) => {
      if (current === null) return current;
      return (current - 1 + featuredImages.length) % featuredImages.length;
    });
  };

  return (
    <>
      <section id="gallery" className="px-12 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
          {featuredImages.map((image, index) => (
            <ImageCard
              key={image.id}
              src={image.src}
              alt={localize(image.title)}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
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

export default Gallery;