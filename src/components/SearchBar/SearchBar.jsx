import "./SearchBar.scss";

const SearchBar = ({
  searchValue,
  setSearchValue,
  isOnSideBar,
  isOnNotesPage,
}) => {
  return (
    <input
      type="text"
      value={searchValue}
      className={
        (isOnNotesPage && "notesPageSearchBar") ||
        (isOnSideBar && "sideBarSearchBar")
      }
      placeholder="Search Note by title"
      onChange={({ target }) => {
        setSearchValue(target.value);
      }}
    />
  );
};

export default SearchBar;
