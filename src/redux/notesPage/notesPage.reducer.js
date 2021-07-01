import appTypes from "../app/app.types";
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

    default:
      return INITIAL_STATE;
  }
};

export default notesPageReducer;
