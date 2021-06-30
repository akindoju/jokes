import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/notesPage/notesPage.actions";
import "./SearchBar.scss";

const SearchBar = ({ isOnSideBar, isOnNotesPage }) => {
  const searchValue = useSelector((state) => state.notesPage.searchValue);
  const dispatch = useDispatch();

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
        dispatch(setSearchValue(target.value));
      }}
    />
  );
};

export default SearchBar;
