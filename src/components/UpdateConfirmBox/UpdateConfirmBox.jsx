import "./UpdateConfirmBox.scss";
import { v4 as uuidv4 } from "uuid";

const UpdateConfirmBox = ({
  setIsUpdatingNote,
  NoteContent,
  setNoteContent,
  gottenTitle,
  gottenDetails,
  noteDate,
  noteKey,
  noteTitle,
  noteDetails,
}) => {
  const saveNewNote = () => {
    NoteContent.push({
      title: gottenTitle,
      date: noteDate,
      details: gottenDetails,
      key: uuidv4(), //to give unique id
    });

    // window.location.reload();
  };

  const updateNote = () => {
    const filteredNoteContent = NoteContent.filter((note) => {
      return note.key !== noteKey;
    });

    //push overwriting note to filteredArray
    filteredNoteContent.push({
      title: gottenTitle,
      date: noteDate,
      details: gottenDetails,
      key: uuidv4(), //to give unique id
    });

    setNoteContent(filteredNoteContent);
    // window.location.reload();
  };

  return (
    <div className="updateBox">
      <p className="updateBox__text">Update Note?</p>
      <div className="updateBoxBtn">
        <button
          className="updateBtn updateBtn--1"
          onClick={() => {
            setIsUpdatingNote(false);
            updateNote();
          }}
        >
          Update
        </button>

        <button
          className="updateBtn updateBtn--2"
          onClick={() => {
            setIsUpdatingNote(false);
            saveNewNote();
          }}
        >
          Save New
        </button>

        <button
          className="updateBtn updateBtn--3"
          onClick={() => {
            setIsUpdatingNote(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateConfirmBox;
