import "./UpdateConfirmBox.scss";

const UpdateConfirmBox = ({ setIsUpdatingNote }) => {
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
          }}
        >
          Save New
        </button>

        <button
          className="updateBtn updateBtn--3"
          onClick={() => {
            // alert("Cancel");
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
