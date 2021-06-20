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
  const [isFromNotesPage, setIsFromNotesPage] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/notes">
          <NotesPage
            setNotesPageGottenTitle={setNotesPageGottenTitle}
            setNotesPageGottenDate={setNotesPageGottenDate}
            setNotesPageGottenDetails={setNotesPageGottenDetails}
            setIsFromNotesPage={setIsFromNotesPage}
          />
        </Route>
        <Route path="/take-note">
          <TakeNotePage
            notesPageGottenTitle={notesPageGottenTitle}
            notesPageGottenDate={notesPageGottenDate}
            notesPageGottenDetails={notesPageGottenDetails}
            setNotesPageGottenTitle={setNotesPageGottenTitle}
            setNotesPageGottenDetails={setNotesPageGottenDetails}
            isFromNotesPage={isFromNotesPage}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
