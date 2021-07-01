import appTypes from "./app.types";

export const setNoteContent = (notes) => {
  return {
    type: appTypes.SET_NOTE_CONTENT,
    payload: notes,
  };
};

export const setNotesPageGottenTitle = (notesPageGottenTitle) => {
  return {
    type: appTypes.SET_NOTES_PAGE_GOTTEN_TITLE,
    payload: notesPageGottenTitle,
  };
};

export const setNotesPageGottenDate = (notesPageGottenDate) => {
  return {
    type: appTypes.SET_NOTES_PAGE_GOTTEN_DATE,
    payload: notesPageGottenDate,
  };
};

export const setNotesPageGottenDetails = (notesPageGottenDetails) => {
  return {
    type: appTypes.SET_NOTES_PAGE_GOTTEN_DETAILS,
    payload: notesPageGottenDetails,
  };
};

export const setNoteKey = (noteKey) => {
  return {
    type: appTypes.SET_NOTE_KEY,
    payload: noteKey,
  };
};

export const setIsNotesPageNoteClicked = (isNotesPageNoteClicked) => {
  return {
    type: appTypes.SET_IS_NOTES_PAGE_NOTE_CLICKED,
    payload: isNotesPageNoteClicked,
  };
};

export const setIsDeleteBtnClicked = (bool) => {
  return {
    type: appTypes.SET_IS_DELETE_BTN_CLICKED,
    payload: bool,
  };
};
