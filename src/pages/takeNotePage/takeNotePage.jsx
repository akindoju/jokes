import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import SideBarNote from "../../components/SideBarNote/SideBarNote";
import "./takeNotePage.scss";

const TakeNotePage = () => {
  return (
    <div className="takeNotesPageContainer">
      <Header />
      <div className="takeNotesPage">
        <div className="takeNotesPage__sideBar">
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
