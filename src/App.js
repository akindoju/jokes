import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import NotesPage from "./pages/notesPage/notesPage";
import TakeNotePage from "./pages/takeNotePage/takeNotePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/notes">
          <NotesPage />
        </Route>
        <Route path="/take-note">
          <TakeNotePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
