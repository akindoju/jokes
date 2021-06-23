import "./ConfirmBox.scss";

const ConfirmBox = ({
  NoteContent,
  setNoteContent,
  setIsDeleteBtnClicked,
  noteKey,
  isUpdatingNote,
  setIsUpdatingNote,
  setGottenDate,
  setGottenDetails,
  setGottenTitle,
  noteTitle,
  noteDetails,
  noteDate,
}) => {
  const deleteNote = () => {
    const filteredNoteContent = NoteContent.filter((note) => {
      return note.key !== noteKey;
    });

    setNoteContent(filteredNoteContent);

    console.log(NoteContent);

    // window.location.reload();
  };

  // const updateNote = () => {
  //   setGottenTitle(noteTitle);
  //   setGottenDetails(noteDetails);
  //   setGottenDate(noteDate);
  // };

  return (
    <div className="confirmBox">
      {isUpdatingNote ? (
        <p className="confirmBox__text">Update Note?</p>
      ) : (
        <p className="confirmBox__text">Delete Note?</p>
      )}
      <div className="confirmBox__btn">
        <button
          className="confirmBox__btn--1"
          onClick={() => {
            deleteNote();
            // isUpdatingNote ? updateNote() : deleteNote();
          }}
        >
          Confirm
        </button>
        <button
          className="confirmBox__btn--2"
          onClick={() => {
            setIsDeleteBtnClicked(false);
            setIsUpdatingNote(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ConfirmBox;
