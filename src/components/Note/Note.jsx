import "./Note.scss";

const Note = () => {
  return (
    <div className="note">
      <div className="note__right">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>sort</title>
          <path d="M3 12.984v-1.969h12v1.969h-12zM3 6h18v2.016h-18v-2.016zM3 18v-2.016h6v2.016h-6z"></path>
        </svg>
        <h2 className="note__title">
          Note that the development build is not optimized.
        </h2>
      </div>
      <h4 className="note__date">Wed Jun, 2021</h4>
    </div>
  );
};

export default Note;
