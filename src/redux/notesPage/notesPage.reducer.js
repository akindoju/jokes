import appTypes from "../app/app.types";
import takeNotesTypes from "../takeNotes/takeNotes.types";
import notesPageTypes from "./notesPage.types";

const INITIAL_STATE = {
  searchValue: "",
};

const notesPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case notesPageTypes.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };

    case appTypes.SET_IS_DELETE_BTN_CLICKED:
      return {
        ...state,
      };

    case appTypes.SET_NOTE_KEY:
      return {
        ...state,
      };

    case takeNotesTypes.SET_IS_SIDEBAR_NOTE_CLICKED:
      return { ...state };

    case takeNotesTypes.SET_GOTTEN_TITLE:
      return { ...state };

    case takeNotesTypes.SET_GOTTEN_DATE:
      return { ...state };

    case takeNotesTypes.SET_GOTTEN_DETAILS:
      return { ...state };

    case takeNotesTypes.SET_IS_UPDATING_NOTE:
      return { ...state };

    case takeNotesTypes.SET_IS_RELOADING_PAGE:
      return { ...state };

    default:
      return INITIAL_STATE;
  }
};

export default notesPageReducer;
