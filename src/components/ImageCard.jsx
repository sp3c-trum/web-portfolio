import { useState } from "react";

const ImageCard = ({ src, alt, onClick, caption, className = "" }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`group mb-10 break-inside-avoid cursor-pointer transition duration-500 hover:scale-[1.03] ${className}`}
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl bg-zinc-100">
        {!loaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-200 via-zinc-100 to-zinc-200" />
        )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`w-full transition duration-500 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
        }`}
      />
        {caption && (
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/65 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageCard;