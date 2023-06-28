import React from "react";
import "./style.scss";

const SearchBar = ({ setQuery, searchQueryHandler }) => {
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Search for a movie or tv show..."
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={searchQueryHandler}
      ></input>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
