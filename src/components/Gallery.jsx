import { useState } from "react";
import { images } from "../data/images";
import ImageModal from "./ImageModal";

const Gallery = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <section id="gallery" className="px-12 pb-24">
<div className="columns-1 sm:columns-2 lg:columns-3 gap-10">
  {[...images]
    .filter(img => img.collections?.includes("featured"))
    .sort((a, b) => b.id - a.id)
    .map((image) => (
      <div
        key={image.id}
        className="mb-10 break-inside-avoid cursor-pointer transition duration-500 hover:scale-[1.03]"
        onClick={() => setSelected(image)}
      >
        <img
          src={image.src}
          alt={image.title}
          className="w-full"
        />
      </div>
  ))}
</div>
      </section>

      {selected && (
        <ImageModal image={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
};

export default Gallery;