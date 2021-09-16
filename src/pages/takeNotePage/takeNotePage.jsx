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
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const TakeNotePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
      NoteContent.unshift({
        title: gottenTitle,
        date: noteDate,
        details: gottenDetails,
      });
    } else if (isNotesPageNoteClicked) {
      NoteContent.unshift({
        title: notesPageGottenTitle,
        date: noteDate,
        details: notesPageGottenDetails,
      });
    } else {
      NoteContent.unshift({
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

  const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      //remove event listener to avoid memory leak
      return window.removeEventListener("resize", handleWindowResize);
    }, []);

    //returning an object with width in it
    return { width };
  };

  const { width } = useViewport();

  const breakPoint = 375;

  // const sortNote = () => {
  //   NoteContent.sort((a, b) => a - b);
  // };

  return (
    <div className="takeNotesPageContainer">
      <Header />

      <div className="takeNotesPage">
        {width <= breakPoint ? (
          <div className="toggleSidebarBtn">
            <svg
              onClick={() => {
                history.push("/notes");
              }}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>list</title>
              <path d="M6.984 6.984h14.016v2.016h-14.016v-2.016zM6.984 17.016v-2.016h14.016v2.016h-14.016zM6.984 12.984v-1.969h14.016v1.969h-14.016zM3 9v-2.016h2.016v2.016h-2.016zM3 17.016v-2.016h2.016v2.016h-2.016zM3 12.984v-1.969h2.016v1.969h-2.016z"></path>
            </svg>
          </div>
        ) : (
          <SideBar />
        )}

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
