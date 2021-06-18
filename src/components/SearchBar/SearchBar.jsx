import "./SearchBar.scss";

const SearchBar = ({ searchValue, setSearchValue }) => {
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
