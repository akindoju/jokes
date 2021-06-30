import { combineReducers } from "redux";
import appReducer from "./app/app.reducer";
import takeNotesReducer from "./takeNotes/takeNotes.reducer";
import notesPageReducer from "./notesPage/notesPage.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  takeNote: takeNotesReducer,
  notesPage: notesPageReducer,
});

export default rootReducer;
