import { NoteContent } from "../../NotesContent";
import "./ConfirmBox.scss";

const ConfirmBox = ({
  IsDeleteBtnClicked,
  setIsDeleteBtnClicked,
  noteKey,
  isUpdatingNote,
  setGottenDate,
  setGottenDetails,
  setGottenTitle,
  noteTitle,
  noteDetails,
  noteDate,
}) => {
  const deleteNote = () => {
    let filteredNote = NoteContent.filter((note) => {
      return note.key === noteKey;
    });

    NoteContent.splice(filteredNote - 1, 1);
    window.location.reload();
  };

  const updateNote = () => {
    setGottenTitle(noteTitle);
    setGottenDetails(noteDetails);
    setGottenDate(noteDate);
  };

  return (
    <div className="confirmBox">
      {isUpdatingNote ? (
        <p className="confirmBox__text">Update Note?</p>
      ) : IsDeleteBtnClicked ? (
        <p className="confirmBox__text">Delete Note?</p>
      ) : null}
      <div className="confirmBox__btn">
        <button
          className="confirmBox__btn--1"
          onClick={() => {
            IsDeleteBtnClicked && deleteNote();
            isUpdatingNote && updateNote();
          }}
        >
          Confirm
        </button>
        <button
          className="confirmBox__btn--2"
          onClick={() => {
            setIsDeleteBtnClicked(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmBox;
