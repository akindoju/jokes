import { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import { NoteContent } from "../../NotesContent";
import "./takeNotePage.scss";

const TakeNotePage = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDetails, setNoteDetails] = useState("");
  const [gottenTitle, setGottenTitle] = useState("");
  const [gottenDate, setGottenDate] = useState("");
  const [gottenDetails, setGottenDetails] = useState("");
  const [isReloadingPage, setIsReloadingPage] = useState(false);
  const [isSideBarNoteClicked, setIsSideBarNoteClicked] = useState(false);
  const noteDate = useRef(new Date().toDateString());

  const saveNote = () => {
    isSideBarNoteClicked
      ? NoteContent.push({
          title: gottenTitle,
          date: gottenDate,
          details: gottenDetails,
        })
      : NoteContent.push({
          title: noteTitle,
          date: noteDate.current,
          details: noteDetails,
        });
  };

  return (
    <div className="takeNotesPageContainer">
      <Header />
      <div className="takeNotesPage">
        <SideBar
          isReloadingPage={isReloadingPage}
          setIsSideBarNoteClicked={setIsSideBarNoteClicked}
          setGottenDate={setGottenDate}
          setGottenDetails={setGottenDetails}
          setGottenTitle={setGottenTitle}
        />

        <div className="takeNotesPage__main">
          <div className="takeNotesPage__main--title">
            <label htmlFor="title">Title:</label>
            <input
              autoComplete="off"
              type="text"
              id="title"
              autoFocus
              value={isSideBarNoteClicked ? gottenTitle : noteTitle}
              onChange={({ target }) => {
                isSideBarNoteClicked
                  ? setGottenTitle(target.value)
                  : setNoteTitle(target.value);
              }}
            />
          </div>
          <div className="takeNotesPage__main--sub">
            <p className="takeNotesPage__main--date">
              Date:{" "}
              <span>
                {isSideBarNoteClicked ? gottenDate : noteDate.current}
              </span>
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
            value={isSideBarNoteClicked ? gottenDetails : noteDetails}
            onChange={({ target }) => {
              isSideBarNoteClicked
                ? setGottenDetails(target.value)
                : setNoteDetails(target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TakeNotePage;
