import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  setNoteContent,
  setNotesPageGottenDate,
  setNotesPageGottenDetails,
  setNotesPageGottenTitle,
} from "../../redux/app/app.actions";
import {
  setGottenDate,
  setGottenDetails,
  setIsUpdatingNote,
  setGottenTitle,
} from "../../redux/takeNotes/takeNotes.actions";
import "./UpdateConfirmBox.scss";

const UpdateConfirmBox = () => {
  const NoteContent = useSelector((state) => state.app.NoteContent);
  const noteDate = useSelector((state) => state.takeNote.noteDate);
  const noteKey = useSelector((state) => state.app.noteKey);
  const gottenTitle = useSelector((state) => state.takeNote.gottenTitle);
  const gottenDetails = useSelector((state) => state.takeNote.gottenDetails);
  const isSideBarNoteClicked = useSelector(
    (state) => state.takeNote.isSideBarNoteClicked
  );
  const isNotesPageNoteClicked = useSelector(
    (state) => state.app.isNotesPageNoteClicked
  );
  const notesPageGottenTitle = useSelector(
    (state) => state.app.notesPageGottenTitle
  );
  const notesPageGottenDetails = useSelector(
    (state) => state.app.notesPageGottenDetails
  );

  const dispatch = useDispatch();

  const saveNewNote = () => {
    if (isSideBarNoteClicked) {
      NoteContent.push({
        title: gottenTitle,
        date: noteDate,
        details: gottenDetails,
        key: uuidv4(), //to give unique id
      });
    } else if (isNotesPageNoteClicked) {
      NoteContent.push({
        title: notesPageGottenTitle,
        date: noteDate,
        details: notesPageGottenDetails,
        key: uuidv4(), //to give unique id
      });
    }
  };

  const updateNote = () => {
    const filteredNoteContent = NoteContent.filter((note) => {
      return note.key !== noteKey;
    });

    //push overwriting note to filteredArray
    if (isSideBarNoteClicked) {
      filteredNoteContent.push({
        title: gottenTitle,
        date: noteDate,
        details: gottenDetails,
        key: uuidv4(), //to give unique id
      });
    } else if (isNotesPageNoteClicked) {
      filteredNoteContent.push({
        title: notesPageGottenTitle,
        date: noteDate,
        details: notesPageGottenDetails,
        key: uuidv4(), //to give unique id
      });
    }

    dispatch(setNoteContent(filteredNoteContent));
    dispatch(setGottenTitle(""));
    dispatch(setGottenDate(new Date().toLocaleString()));
    dispatch(setGottenDetails(""));
    dispatch(setNotesPageGottenTitle(""));
    dispatch(setNotesPageGottenDate(new Date().toLocaleString()));
    dispatch(setNotesPageGottenDetails(""));
  };

  return (
    <div className="updateBox">
      <p className="updateBox__text">Update Note?</p>
      <div className="updateBoxBtn">
        <button
          className="updateBtn updateBtn--1"
          onClick={() => {
            dispatch(setIsUpdatingNote(false));
            updateNote();
          }}
        >
          Update
        </button>

        <button
          className="updateBtn updateBtn--2"
          onClick={() => {
            dispatch(setIsUpdatingNote(false));
            saveNewNote();
          }}
        >
          Save New
        </button>

        <button
          className="updateBtn updateBtn--3"
          onClick={() => {
            dispatch(setIsUpdatingNote(false));
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateConfirmBox;
