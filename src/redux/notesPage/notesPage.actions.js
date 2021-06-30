import notesPageTypes from "./notesPage.types";

export const setSearchValue = (value) => {
  return {
    type: notesPageTypes.SET_SEARCH_VALUE,
    payload: value,
  };
};
