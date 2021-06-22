import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import NotesPage from "./pages/notesPage/notesPage";
import TakeNotePage from "./pages/takeNotePage/takeNotePage";
import "./App.css";
import { useState } from "react";

function App() {
  const [notesPageGottenTitle, setNotesPageGottenTitle] = useState("");
  const [notesPageGottenDate, setNotesPageGottenDate] = useState("");
  const [notesPageGottenDetails, setNotesPageGottenDetails] = useState("");
  const [isNotesPageNoteClicked, setIsNotesPageNoteClicked] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage setIsNotesPageNoteClicked={setIsNotesPageNoteClicked} />
        </Route>
        <Route path="/notes">
          <NotesPage
            setNotesPageGottenTitle={setNotesPageGottenTitle}
            setNotesPageGottenDate={setNotesPageGottenDate}
            setNotesPageGottenDetails={setNotesPageGottenDetails}
            setIsNotesPageNoteClicked={setIsNotesPageNoteClicked}
          />
        </Route>
        <Route path="/take-note">
          <TakeNotePage
            notesPageGottenTitle={notesPageGottenTitle}
            notesPageGottenDate={notesPageGottenDate}
            notesPageGottenDetails={notesPageGottenDetails}
            setNotesPageGottenTitle={setNotesPageGottenTitle}
            setNotesPageGottenDetails={setNotesPageGottenDetails}
            isNotesPageNoteClicked={isNotesPageNoteClicked}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
