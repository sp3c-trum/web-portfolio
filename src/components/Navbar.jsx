const Navbar = ({ setPage }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-sm tracking-widest uppercase">
          mikolaj koper
        </span>

        <div className="space-x-6 text-sm">
          <button
            onClick={() => setPage("gallery")}
            className="hover:opacity-60 transition"
          >
            galeria
          </button>
          <button
            onClick={() => setPage("contact")}
            className="hover:opacity-60 transition"
          >
            kontakt
          </button>

          <button onClick={() => setPage("collections")} className="hover:opacity-60 transition">

            collections
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;