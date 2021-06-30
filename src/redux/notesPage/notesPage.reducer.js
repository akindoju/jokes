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

    default:
      return INITIAL_STATE;
  }
};

export default notesPageReducer;
