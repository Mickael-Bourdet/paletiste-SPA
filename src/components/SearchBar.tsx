function Searchbar() {
  // TODO : better search system
  return (
    <div className="search-bar text-black text-sm relative max-w-70 md:min-w-75 md:block font-body tracking-wider dark:text-placeholder">
      <form className="flex gap-2 ">
        <button type="submit" aria-label="soumettre la recherche">
          <i className="fas fa-search absolute left-3 -translate-y-1/2 pl-2"></i>
        </button>
        <input
          type="text"
          placeholder="Chercher un concours"
          className="border rounded px-3 py-2 w-full pl-10 placeholder-gray-400 "
        />
      </form>
    </div>
  );
}

export default Searchbar;
