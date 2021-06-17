import { useState } from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <input
      type="text"
      value={searchValue}
      className="searchBar"
      placeholder="Search Note"
      onChange={({ target }) => setSearchValue(target.value)}
    />
  );
};

export default SearchBar;
