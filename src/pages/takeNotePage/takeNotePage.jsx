import { useHistory } from "react-router";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import SideBarNote from "../../components/SideBarNote/SideBarNote";
import "./takeNotePage.scss";

const TakeNotePage = () => {
  const history = useHistory();

  return (
    <div className="takeNotesPageContainer">
      <Header />
      <div className="takeNotesPage">
        <div className="takeNotesPage__sideBar">
          <svg
            onClick={(event) => {
              event.preventDefault();
              history.goBack();
            }}
            className="takeNotesPage__backBtn"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>arrow-left2</title>
            <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
          </svg>
          <SearchBar />
          <SideBarNote />
          <SideBarNote />
          <SideBarNote />
          <SideBarNote />
        </div>
        <div className="takeNotesPage__main">
          <div className="takeNotesPage__main--title">
            <label htmlFor="title">Title:</label>
            <input type="text" id="title" autoFocus />
          </div>
          <p className="takeNotesPage__main--date">
            Date: <span>{new Date().toLocaleString()}</span>
          </p>
          <textarea />
        </div>
      </div>
    </div>
  );
};

export default TakeNotePage;
