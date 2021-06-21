import "./ConfirmBox.scss";

const ConfirmBox = ({ setIsDeleteBtnClicked }) => {
  return (
    <div className="confirmBox">
      <p className="confirmBox__text">Delete Active Note?</p>
      <div className="confirmBox__btn">
        <button className="confirmBox__btn--1">Delete</button>
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
