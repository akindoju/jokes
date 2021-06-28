import appTypes from "./app.types";

export const setNoteContent = (notes) => {
  return {
    type: appTypes.SET_NOTE_CONTENT,
    payload: notes,
  };
};

export const setNotesPageGottenTitle = (title) => {
  return {
    type: appTypes.SET_NOTES_PAGE_GOTTEN_TITLE,
    payload: title,
  };
};

export const setNotesPageGottenDate = (date) => {
  return {
    type: appTypes.SET_NOTES_PAGE_GOTTEN_DATE,
    payload: date,
  };
};

export const setNotesPageGottenDetails = (details) => {
  return {
    type: appTypes.SET_NOTES_PAGE_GOTTEN_DETAILS,
    payload: details,
  };
};

export const setNoteKey = (key) => {
  return {
    type: appTypes.SET_NOTES_PAGE_GOTTEN_DETAILS,
    payload: key,
  };
};

export const setIsNotesPageNoteClicked = (bool) => {
  return {
    type: appTypes.SET_IS_NOTES_PAGE_NOTE_CLICKED,
    payload: bool,
  };
};

export const setIsDeleteBtnClicked = (bool) => {
  return {
    type: appTypes.SET_IS_DELETE_BTN_CLICKED,
    payload: bool,
  };
};
