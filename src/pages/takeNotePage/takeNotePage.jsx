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
      </div>
    </div>
  );
};

export default TakeNotePage;
