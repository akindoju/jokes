import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import NotesPage from "./pages/notesPage/notesPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/notes" component={NotesPage} />
      </Switch>
    </Router>
  );
}

export default App;
