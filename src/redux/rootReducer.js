import { combineReducers } from "redux";
import appReducer from "./app/app.reducer";
import takeNotesReducer from "./takeNotes/takeNotes.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  takeNote: takeNotesReducer,
});

export default rootReducer;
