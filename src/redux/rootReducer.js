import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import appReducer from "./app/app.reducer";
import takeNotesReducer from "./takeNotes/takeNotes.reducer";
import notesPageReducer from "./notesPage/notesPage.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["app"],
};

const rootReducer = combineReducers({
  app: appReducer,
  takeNote: takeNotesReducer,
  notesPage: notesPageReducer,
});

export default persistReducer(persistConfig, rootReducer);
