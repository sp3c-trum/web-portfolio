const ImageCard = ({ src, alt }) => {
  return (
    <div className="mb-10 break-inside-avoid cursor-pointer transition duration-500 hover:scale-[1.03] opacity-0 animate-fadeIn">
      <img
        src={src}
        alt={alt}
        className="w-full rounded-xl hover:scale-[1.02] transition duration-500"
      />
    </div>
  );
};

export default ImageCard;