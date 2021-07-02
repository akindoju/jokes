import { useDispatch, useSelector } from "react-redux";
import {
  setIsDeleteBtnClicked,
  setNoteContent,
  setNotesPageGottenDate,
  setNotesPageGottenDetails,
  setNotesPageGottenTitle,
} from "../../redux/app/app.actions";
import "./DeleteConfirmBox.scss";

const DeleteConfirmBox = () => {
  const dispatch = useDispatch();
  const noteKey = useSelector((state) => state.app.noteKey);
  const NoteContent = useSelector((state) => state.app.NoteContent);

  const deleteNote = () => {
    const filteredNoteContent = NoteContent.filter((note) => {
      return note.key !== noteKey;
    });

    dispatch(setNoteContent(filteredNoteContent));
    dispatch(setIsDeleteBtnClicked(false));
    dispatch(setNotesPageGottenTitle(""));
    dispatch(setNotesPageGottenDate(new Date().toLocaleString()));
    dispatch(setNotesPageGottenDetails(""));
  };

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
            dispatch(setIsDeleteBtnClicked(false));
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteConfirmBox;
