import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <MdSearch className="search_icon" size={"1.3em"} />
      <input
        type="text"
        placeholder="Type tp search..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
