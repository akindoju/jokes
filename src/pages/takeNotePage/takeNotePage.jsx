import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import ConfirmBox from "../../components/ConfirmBox/ConfirmBox";
import "./takeNotePage.scss";

const TakeNotePage = ({
  NoteContent,
  setNoteContent,
  notesPageGottenTitle,
  notesPageGottenDate,
  notesPageGottenDetails,
  setNotesPageGottenTitle,
  setNotesPageGottenDetails,
  isNotesPageNoteClicked,
  setIsDeleteBtnClicked,
  isDeleteBtnClicked,
  noteKey,
  setNoteKey,
}) => {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDetails, setNoteDetails] = useState("");
  const [gottenTitle, setGottenTitle] = useState("");
  const [gottenDate, setGottenDate] = useState("");
  const [gottenDetails, setGottenDetails] = useState("");
  const [isReloadingPage, setIsReloadingPage] = useState(false);
  const [isSideBarNoteClicked, setIsSideBarNoteClicked] = useState(false);
  const [isUpdatingNote, setIsUpdatingNote] = useState(false);
  const noteDate = useRef(new Date().toLocaleString());

  const saveNote = () => {
    isSideBarNoteClicked
      ? NoteContent.push({
          title: gottenTitle,
          date: noteDate.current,
          details: gottenDetails,
        })
      : isNotesPageNoteClicked
      ? NoteContent.push({
          title: notesPageGottenTitle,
          date: noteDate.current,
          details: notesPageGottenDetails,
        })
      : NoteContent.push({
          title: noteTitle,
          date: noteDate.current,
          details: noteDetails,
          key: uuidv4(), //to give unique id
        });
  };

  const savingNote = () => {
    const filteredNoteKeys = NoteContent.map((note) => {
      return note.key === noteKey;
    });

    if (filteredNoteKeys.includes(true)) {
      setIsDeleteBtnClicked(true);
      setIsUpdatingNote(true);
    } else {
      saveNote();
    }
  };

  return (
    <div className="takeNotesPageContainer">
      <Header />
      <div className="takeNotesPage">
        <SideBar
          NoteContent={NoteContent}
          isReloadingPage={isReloadingPage}
          setIsSideBarNoteClicked={setIsSideBarNoteClicked}
          setGottenDate={setGottenDate}
          setGottenDetails={setGottenDetails}
          setGottenTitle={setGottenTitle}
          setNoteKey={setNoteKey}
        />

        <div className="takeNotesPage__right">
          <div className="takeNotesPage__right__title">
            <label htmlFor="title">Title:</label>
            <input
              autoComplete="off"
              type="text"
              id="title"
              autoFocus
              value={
                isSideBarNoteClicked
                  ? gottenTitle
                  : isNotesPageNoteClicked
                  ? notesPageGottenTitle
                  : noteTitle
              }
              onChange={({ target }) => {
                isSideBarNoteClicked
                  ? setGottenTitle(target.value)
                  : isNotesPageNoteClicked
                  ? setNotesPageGottenTitle(target.value)
                  : setNoteTitle(target.value);
              }}
            />
          </div>
          <div className="takeNotesPage__right__sub">
            <p className="takeNotesPage__right__sub--date">
              Date:
              <span>
                {isSideBarNoteClicked
                  ? gottenDate
                  : isNotesPageNoteClicked
                  ? notesPageGottenDate
                  : noteDate.current}
              </span>
            </p>
            <div className="takeNotesPage__right__sub--buttons">
              <button
                className="takeNotesPage__right__sub--buttons--1"
                onClick={() => {
                  setIsDeleteBtnClicked(true);
                }}
              >
                Delete
              </button>

              <button
                className="takeNotesPage__right__sub--buttons--2"
                onClick={() => {
                  savingNote();
                  setIsReloadingPage(true);
                  setTimeout(() => {
                    setIsReloadingPage(false);
                  }, 100);
                }}
              >
                Save
              </button>
            </div>
          </div>
          {isDeleteBtnClicked && (
            <ConfirmBox
              NoteContent={NoteContent}
              setNoteContent={setNoteContent}
              isDeleteBtnClicked={isDeleteBtnClicked}
              setIsDeleteBtnClicked={setIsDeleteBtnClicked}
              isUpdatingNote={isUpdatingNote}
              setIsUpdatingNote={setIsUpdatingNote}
              setGottenTitle={setGottenTitle}
              setGottenDetails={setGottenDetails}
              setGottenDate={setGottenDate}
              noteKey={noteKey}
              noteTitle={noteTitle}
              noteDetails={noteDetails}
              noteDate={noteDate.current}
            />
          )}
          <textarea
            value={
              isSideBarNoteClicked
                ? gottenDetails
                : isNotesPageNoteClicked
                ? notesPageGottenDetails
                : noteDetails
            }
            onChange={({ target }) => {
              isSideBarNoteClicked
                ? setGottenDetails(target.value)
                : isNotesPageNoteClicked
                ? setNotesPageGottenDetails(target.value)
                : setNoteDetails(target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TakeNotePage;
