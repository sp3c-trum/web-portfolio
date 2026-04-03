import { useEffect } from "react";
import { createPortal } from "react-dom";

const ImageModal = ({ image, onClose, lang = "pl" }) => {
  const closeLabel = lang === "pl" ? "Zamknij" : "Close";

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-[9999] p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] max-w-[95vw] bg-white rounded-3xl shadow-2xl overflow-hidden animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEWA STRONA — ZDJĘCIE (dynamic width) */}
        <div className="flex items-center justify-center bg-black">
          <img
            src={image.src}
            alt={image.title}
            className="max-h-[90vh] w-auto object-contain"
          />
        </div>

        {/* PRAWA STRONA — PANEL INFO */}
        <div className="w-[300px] p-10 border-l border-gray-200 flex flex-col justify-between bg-white">
          <div>
            <h2 className="text-2xl mb-3 text-black">
              {image.title}
            </h2>

            <p className="text-sm text-gray-400 mb-6">
              {image.location} · {image.year}
            </p>

            <p className="text-sm text-gray-500 leading-relaxed mb-8">
              {image.description}
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