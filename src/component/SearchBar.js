import React from "react";

const SearchBar = ({ updateQuery }) => {
  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => updateQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
