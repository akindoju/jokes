import appTypes from "../app/app.types";
import takeNotesTypes from "./takeNotes.types";

const INITIAL_STATE = {
  noteTitle: "",
  noteDate: new Date().toLocaleString(),
  noteDetails: "",
  gottenTitle: "",
  gottenDate: "",
  gottenDetails: "",
  isReloadingPage: false,
  isSideBarNoteClicked: false,
  isUpdatingNote: false,
};

const takeNotesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case takeNotesTypes.SET_NOTE_TITLE:
      return { ...state, noteTitle: action.payload };

    case takeNotesTypes.SET_NOTES_DETAILS:
      return { ...state, noteDetails: action.payload };

    case takeNotesTypes.SET_GOTTEN_TITLE:
      return { ...state, gottenTitle: action.payload };

    case takeNotesTypes.SET_GOTTEN_DATE:
      return { ...state, gottenDate: action.payload };

    case takeNotesTypes.SET_GOTTEN_DETAILS:
      return { ...state, gottenDetails: action.payload };

    case takeNotesTypes.SET_IS_RELOADING_PAGE:
      return { ...state, isReloadingPage: action.payload };

    case takeNotesTypes.SET_IS_SIDEBAR_NOTE_CLICKED:
      return { ...state, isSideBarNoteClicked: action.payload };

    case takeNotesTypes.SET_IS_UPDATING_NOTE:
      return { ...state, isUpdatingNote: action.payload };

    case appTypes.SET_IS_DELETE_BTN_CLICKED:
      return {
        ...state,
      };

    case appTypes.SET_NOTE_KEY:
      return {
        ...state,
      };

    default:
      return INITIAL_STATE;
  }
};

export default takeNotesReducer;
