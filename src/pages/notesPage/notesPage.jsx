import { useRef, useState } from "react";
// import Note from "../../components/Note/Note";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import SideBarNote from "../../components/Note/Note";
import { NoteContent } from "../../NotesContent";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./notesPage.scss";

const NotesPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const isOnNotesPage = useRef(true);
  const history = useHistory();

  return (
    <div className="notesPageContainer">
      <Header />
      <div className="notesPage">
        <svg
          onClick={(event) => {
            event.preventDefault();
            history.goBack();
          }}
          className="notesPage__backBtn"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>arrow-left2</title>
          <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
        </svg>
        <h1 className="notesPage__title">Notes</h1>
        <div className="notesPage__note">
          <SearchBar
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            isOnNotesPage={isOnNotesPage.current}
          />
          {NoteContent.length > 0 ? (
            searchValue === "" ? (
              NoteContent.map((note) => {
                return (
                  <SideBarNote
                    title={note.title}
                    date={note.date}
                    isOnNotesPage={isOnNotesPage.current}
                  />
                );
              })
            ) : (
              //filter notes acc. to search value
              NoteContent.filter((note) =>
                note.title.toLowerCase().includes(searchValue.toLowerCase())
              ).map((note) => {
                return (
                  <SideBarNote
                    title={note.title}
                    date={note.date}
                    isOnNotesPage={isOnNotesPage.current}
                  />
                );
              })
            )
          ) : (
            <div>
              <p className="noNotes">You currently have no notes!</p>
              <div className="takeNotesBtn">
                <Link className="homepage__link Link" to="/take-note">
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <title>add_circle</title>
                    <path d="M17.016 12.984v-1.969h-4.031v-4.031h-1.969v4.031h-4.031v1.969h4.031v4.031h1.969v-4.031h4.031zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"></path>
                  </svg>
                  <p>Take Note</p>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
