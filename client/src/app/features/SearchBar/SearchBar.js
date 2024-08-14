import "./SearchBar.css"

function SearchBar() {
  return (
    <div className="search-bar border d-flex justify-content-between align-items-center">
      <input type="text" className="w-100" placeholder="Search..."></input>
      <span className="material-symbols-outlined d-flex justify-content-center align-items-center">search</span>
    </div>
  );
}

export default SearchBar;
