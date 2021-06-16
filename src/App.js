import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import NotesPage from "./pages/notesPage/notesPage";
import "./App.css";
import AddNotePage from "./pages/addNotePage/addNotePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/notes" component={NotesPage} />
        <Route path="/add-note" component={AddNotePage} />
      </Switch>
    </Router>
  );
}

export default App;