import "./UpdateConfirmBox.scss";
import { v4 as uuidv4 } from "uuid";

const UpdateConfirmBox = ({
  setIsUpdatingNote,
  NoteContent,
  gottenTitle,
  gottenDetails,
  noteDate,
}) => {
  const saveNewNote = () => {
    NoteContent.push({
      title: gottenTitle,
      date: noteDate,
      details: gottenDetails,
      key: uuidv4(), //to give unique id
    });
  };

  return (
    <div className="updateBox">
      <p className="updateBox__text">Update Note?</p>
      <div className="updateBoxBtn">
        <button
          className="updateBtn updateBtn--1"
          onClick={() => {
            setIsUpdatingNote(false);
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
