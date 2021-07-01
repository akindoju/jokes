import takeNotesTypes from "./takeNotes.types";

export const setNoteTitle = (noteTitle) => {
  return {
    type: takeNotesTypes.SET_NOTE_TITLE,
    payload: noteTitle,
  };
};

export const setNoteDetails = (noteDetails) => {
  return {
    type: takeNotesTypes.SET_NOTES_DETAILS,
    payload: noteDetails,
  };
};

export const setGottenTitle = (gottenTitle) => {
  return {
    type: takeNotesTypes.SET_GOTTEN_TITLE,
    payload: gottenTitle,
  };
};

export const setGottenDate = (gottenDate) => {
  return {
    type: takeNotesTypes.SET_GOTTEN_DATE,
    payload: gottenDate,
  };
};

export const setGottenDetails = (gottenDetails) => {
  return {
    type: takeNotesTypes.SET_GOTTEN_DETAILS,
    payload: gottenDetails,
  };
};

export const setIsReloadingPage = (bool) => {
  return {
    type: takeNotesTypes.SET_IS_RELOADING_PAGE,
    payload: bool,
  };
};

export const setIsSideBarNoteClicked = (bool) => {
  return {
    type: takeNotesTypes.SET_IS_SIDEBAR_NOTE_CLICKED,
    payload: bool,
  };
};

export const setIsUpdatingNote = (bool) => {
  return {
    type: takeNotesTypes.SET_IS_UPDATING_NOTE,
    payload: bool,
  };
};
