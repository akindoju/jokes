import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import {
  setNotesPageGottenTitle,
  setNotesPageGottenDetails,
  setIsDeleteBtnClicked,
} from "../../redux/app/app.actions";
import {
  setNoteTitle,
  setNoteDetails,
  setGottenTitle,
  setGottenDetails,
  setIsReloadingPage,
  setIsUpdatingNote,
} from "../../redux/takeNotes/takeNotes.actions";
import Header from "../../components/Header/Header";
import SideBar from "../../components/SideBar/SideBar";
import DeleteConfirmBox from "../../components/DeleteConfirmBox/DeleteConfirmBox";
import UpdateConfirmBox from "../../components/UpdateConfirmBox/UpdateConfirmBox";
import "./takeNotePage.scss";

const TakeNotePage = () => {
  const dispatch = useDispatch();

  const NoteContent = useSelector((state) => state.app.NoteContent);
  const noteKey = useSelector((state) => state.app.noteKey);
  const noteTitle = useSelector((state) => state.takeNote.noteTitle);
  const noteDate = useSelector((state) => state.takeNote.noteDate);
  const noteDetails = useSelector((state) => state.takeNote.noteDetails);
  const gottenTitle = useSelector((state) => state.takeNote.gottenTitle);
  const gottenDate = useSelector((state) => state.takeNote.gottenDate);
  const gottenDetails = useSelector((state) => state.takeNote.gottenDetails);
  const isSideBarNoteClicked = useSelector(
    (state) => state.takeNote.isSideBarNoteClicked
  );
  const isUpdatingNote = useSelector((state) => state.takeNote.isUpdatingNote);
  const notesPageGottenTitle = useSelector(
    (state) => state.app.notesPageGottenTitle
  );
  const notesPageGottenDate = useSelector(
    (state) => state.app.notesPageGottenDate
  );
  const notesPageGottenDetails = useSelector(
    (state) => state.app.notesPageGottenDetails
  );
  const isDeleteBtnClicked = useSelector(
    (state) => state.app.isDeleteBtnClicked
  );
  const isNotesPageNoteClicked = useSelector(
    (state) => state.app.isNotesPageNoteClicked
  );

  const saveNote = () => {
    if (isSideBarNoteClicked) {
      NoteContent.push({
        title: gottenTitle,
        date: noteDate,
        details: gottenDetails,
      });
    } else if (isNotesPageNoteClicked) {
      NoteContent.push({
        title: notesPageGottenTitle,
        date: noteDate,
        details: notesPageGottenDetails,
      });
    } else {
      NoteContent.push({
        title: noteTitle,
        date: noteDate,
        details: noteDetails,
        key: uuidv4(), //to give unique id
      });
    }

    dispatch(setNoteDetails(""));
    dispatch(setNoteTitle(""));
  };

  const savingNote = () => {
    //filtering sideBar notes
    const filteredNoteKeys = NoteContent.map((note) => {
      return note.key === noteKey;
    });

    if (filteredNoteKeys.includes(true)) {
      dispatch(setIsUpdatingNote(true));
    } else {
      saveNote();
    }
  };

  const disableDelBtn =
    gottenTitle.length < 1 && notesPageGottenTitle.length < 1;

  const disableSaveBtn =
    noteTitle.length < 1 &&
    gottenTitle.length < 1 &&
    notesPageGottenTitle.length < 1 &&
    !(notesPageGottenTitle || gottenTitle);

  return (
    <div className="takeNotesPageContainer">
      <Header />
      <div className="takeNotesPage">
        <SideBar />

        <div className="takeNotesPage__right">
          <div className="takeNotesPage__right__title">
            <label htmlFor="title">Title:</label>
            <input
              autoComplete="off"
              type="text"
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
                  ? dispatch(setGottenTitle(target.value))
                  : isNotesPageNoteClicked
                  ? dispatch(setNotesPageGottenTitle(target.value))
                  : dispatch(setNoteTitle(target.value));
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
                  : noteDate}
              </span>
            </p>
            <div className="takeNotesPage__right__sub--buttons">
              <button
                className={
                  disableDelBtn
                    ? "takeNotesPage__right__sub--buttons--1 opacity"
                    : "takeNotesPage__right__sub--buttons--1"
                }
                onClick={() => {
                  dispatch(setIsDeleteBtnClicked(true));
                }}
                disabled={disableDelBtn}
              >
                Delete
              </button>

              <button
                className={
                  disableSaveBtn
                    ? "takeNotesPage__right__sub--buttons--2 opacity"
                    : "takeNotesPage__right__sub--buttons--2"
                }
                onClick={() => {
                  isSideBarNoteClicked || isNotesPageNoteClicked
                    ? savingNote()
                    : saveNote();
                  dispatch(setIsReloadingPage(true));
                  setTimeout(() => {
                    dispatch(setIsReloadingPage(false));
                  }, 100);
                }}
                disabled={disableSaveBtn}
              >
                Save
              </button>
            </div>
          </div>
          {isDeleteBtnClicked && <DeleteConfirmBox />}

          {isUpdatingNote && <UpdateConfirmBox />}
          <textarea
            value={
              isSideBarNoteClicked
                ? gottenDetails
                : isNotesPageNoteClicked
                ? notesPageGottenDetails
                : noteDetails
            }
            onChange={({ target }) => {
              console.log(notesPageGottenDate, "motesPageGottenDetails");
              isSideBarNoteClicked
                ? dispatch(setGottenDetails(target.value))
                : isNotesPageNoteClicked
                ? dispatch(setNotesPageGottenDetails(target.value))
                : dispatch(setNoteDetails(target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TakeNotePage;
