import { NoteContent } from "../../NotesContent";
import "./ConfirmBox.scss";

const ConfirmBox = ({ setIsDeleteBtnClicked, noteKey }) => {
  const deleteNote = () => {
    let filteredNote = NoteContent.filter((note) => {
      return note.key === noteKey;
    });

    NoteContent.splice(filteredNote, 1);
    window.location.reload();
  };

  return (
    <div className="confirmBox">
      <p className="confirmBox__text">Delete Active Note?</p>
      <div className="confirmBox__btn">
        <button
          className="confirmBox__btn--1"
          onClick={() => {
            deleteNote();
          }}
        >
          Delete
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
