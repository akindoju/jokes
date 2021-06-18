import { useState } from "react";
import { NoteContent } from "../../NotesContent";
import "./SearchBar.scss";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <input
      type="text"
      value={searchValue}
      className="searchBar"
      placeholder="Search Note by title"
      onChange={({ target }) => {
        setSearchValue(target.value);
      }}
    />
  );
};

export default SearchBar;
