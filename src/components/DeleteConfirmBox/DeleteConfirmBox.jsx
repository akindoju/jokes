import { useSelector } from "react-redux";
import "./DeleteConfirmBox.scss";

const DeleteConfirmBox = ({
  NoteContent,
  setNoteContent,
  setIsDeleteBtnClicked,
  // noteKey,
}) => {
  const deleteNote = () => {
    const filteredNoteContent = NoteContent.filter((note) => {
      return note.key !== noteKey;
    });

    setNoteContent(filteredNoteContent);

    window.location.reload();
  };

  const noteKey = useSelector((state) => state.app.noteKey);

  return (
    <div className="confirmBox">
      <p className="confirmBox__text">Delete Note?</p>
      <div className="confirmBox__btn">
        <button
          className="confirmBox__btn--1"
          onClick={() => {
            deleteNote();
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

export default DeleteConfirmBox;
