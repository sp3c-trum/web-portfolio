import { useMemo, useState } from "react";
import { images } from "../data/images";
import ImageModal from "./ImageModal";
import ImageCard from "./ImageCard";

const Gallery = ({ lang = "pl" }) => {
  const [selected, setSelected] = useState(null);
  const featuredImages = useMemo(
    () =>
      [...images]
        .filter((img) => img.collections?.includes("featured"))
        .sort((a, b) => b.id - a.id),
    []
  );

  return (
    <>
      <section id="gallery" className="px-12 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
          {featuredImages.map((image) => (
            <ImageCard
              key={image.id}
              src={image.src}
              alt={image.title}
              onClick={() => setSelected(image)}
            />
          ))}
        </div>
      </section>

      {selected && (
        <ImageModal image={selected} onClose={() => setSelected(null)} lang={lang} />
      )}
    </>
  );
};

export default Gallery;