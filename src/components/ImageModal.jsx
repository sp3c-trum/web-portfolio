import { useEffect } from "react";
import { createPortal } from "react-dom";

const ImageModal = ({ image, onClose, onPrev, onNext, lang = "pl" }) => {
  const closeLabel = lang === "pl" ? "Zamknij" : "Close";
  const prevLabel = lang === "pl" ? "Poprzednie" : "Previous";
  const nextLabel = lang === "pl" ? "Następne" : "Next";
  const localize = (value) => {
    if (typeof value === "string") return value;
    return value?.[lang] || value?.pl || value?.en || "";
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  return createPortal(
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-6 animate-fadeIn"
      onClick={onClose}
    >
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          aria-label={prevLabel}
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-[10000] h-11 w-11 rounded-full border border-white/20 bg-black/45 text-white hover:bg-white hover:text-black transition duration-300"
        >
          &lt;
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          aria-label={nextLabel}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-[10000] h-11 w-11 rounded-full border border-white/20 bg-black/45 text-white hover:bg-white hover:text-black transition duration-300"
        >
          &gt;
        </button>
      )}

      <div
        key={image.id}
        className="relative flex max-h-[90vh] max-w-[95vw] bg-white rounded-3xl shadow-2xl overflow-hidden animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEWA STRONA — ZDJĘCIE (dynamic width) */}
        <div className="flex items-center justify-center bg-black">
          <img
            src={image.src}
            alt={localize(image.title)}
            className="max-h-[90vh] w-auto object-contain"
          />
        </div>

        {/* PRAWA STRONA — PANEL INFO */}
        <div className="w-[300px] p-10 border-l border-gray-200 flex flex-col justify-between bg-white">
          <div>
            <h2 className="text-2xl mb-3 text-black">
              {localize(image.title)}
            </h2>

            <p className="text-sm text-gray-400 mb-6">
              {localize(image.location)} · {image.year}
            </p>

            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              {localize(image.description)}
            </p>

            <div className="text-xs text-gray-400 space-y-2">
              <p>{image.camera}</p>
              <p>{image.lens}</p>
              <p>{image.settings}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-xs text-gray-400 hover:text-black transition"
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ImageModal;