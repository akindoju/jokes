import Note from "../../components/Note/Note";
import Header from "../../components/Header/Header";
import "./notesPage.scss";

const NotesPage = () => {
  return (
    <div className="notesPageContainer">
      <Header />
      <div className="notesPage">
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
