import Note from "../../components/Note/Note";
import Header from "../../components/Header/Header";

import "./notesPage.scss";
import { useHistory } from "react-router-dom";

const NotesPage = () => {
  const history = useHistory();

  return (
    <div className="notesPageContainer">
      <Header />
      <div className="notesPage">
        <svg
          onClick={(event) => {
            event.preventDefault();
            history.goBack();
          }}
          className="notesPage__backBtn"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>arrow-left2</title>
          <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
        </svg>
        <h1 className="notesPage__title">Notes</h1>
        <div className="notesPage__note">
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
          <Note />
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
