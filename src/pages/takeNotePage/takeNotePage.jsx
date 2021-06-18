import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { NoteContent } from "../../NotesContent";
import "./takeNotePage.scss";

const TakeNotePage = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const noteDate = useRef(new Date().toDateString());
  const [noteDetails, setNoteDetails] = useState("");
  const [isReloadingPage, setIsReloadingPage] = useState(false);

  const saveNote = () => {
    NoteContent.push({
      title: noteTitle,
      date: noteDate.current,
      details: noteDetails,
    });
  };

  return (
    <div className="takeNotesPageContainer">
      <Header />
      <div className="takeNotesPage">
        <SideBar isReloadingPage={isReloadingPage} />
        <div className="takeNotesPage__main">
          <div className="takeNotesPage__main--title">
            <label htmlFor="title">Title:</label>
            <input
              autoComplete="off"
              type="text"
              id="title"
              autoFocus
              value={noteTitle}
              onChange={({ target }) => {
                setNoteTitle(target.value);
              }}
            />
          </div>
          <div className="takeNotesPage__main--sub">
            <p className="takeNotesPage__main--date">
              Date: <span>{noteDate.current}</span>
            </p>
            <button
              onClick={() => {
                saveNote();
                setIsReloadingPage(true);
                setTimeout(() => {
                  setIsReloadingPage(false);
                }, 100);
              }}
            >
              Save
            </button>
          </div>
          <textarea
            value={noteDetails}
            onChange={({ target }) => {
              setNoteDetails(target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TakeNotePage;
