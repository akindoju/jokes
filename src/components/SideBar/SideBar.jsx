import { useEffect, useState, useRef } from "react";
import Note from "../Note/Note";
import SearchBar from "../SearchBar/SearchBar";
import { NoteContent } from "../../NotesContent";
import { useHistory } from "react-router";
import "./SideBar.scss";

const SideBar = ({
  IsReloadingPage,
  setIsSideBarNoteClicked,
  setGottenDetails,
  setGottenDate,
  setGottenTitle,
}) => {
  const [searchValue, setSearchValue] = useState("");
  const isOnSideBar = useRef(true);
  const history = useHistory();

  useEffect(() => {
    IsReloadingPage && window.location.reload();
  }, [IsReloadingPage]);

  return (
    <div className="sideBar">
      <svg
        onClick={(event) => {
          event.preventDefault();
          history.goBack();
        }}
        className="sideBar__backBtn"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <title>arrow-left2</title>
        <path d="M12.586 27.414l-10-10c-0.781-0.781-0.781-2.047 0-2.828l10-10c0.781-0.781 2.047-0.781 2.828 0s0.781 2.047 0 2.828l-6.586 6.586h19.172c1.105 0 2 0.895 2 2s-0.895 2-2 2h-19.172l6.586 6.586c0.39 0.39 0.586 0.902 0.586 1.414s-0.195 1.024-0.586 1.414c-0.781 0.781-2.047 0.781-2.828 0z"></path>
      </svg>
      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        isOnSideBar={isOnSideBar.current}
      />
      {NoteContent.length > 0 ? (
        searchValue === "" ? (
          NoteContent.map((note) => {
            return (
              <div
                className="sideBar__sideBarNote"
                onClick={() => {
                  console.log("clicked");
                  setIsSideBarNoteClicked(true);
                  setGottenTitle(note.title);
                  setGottenDate(note.date);
                  setGottenDetails(note.details);
                }}
              >
                <Note
                  title={note.title}
                  date={note.date}
                  isOnSideBar={isOnSideBar.current}
                />
              </div>
            );
          })
        ) : (
          //filter notes acc. to search value
          NoteContent.filter((note) =>
            note.title.toLowerCase().includes(searchValue.toLowerCase())
          ).map((note) => {
            return (
              <div
                className="sideBar__sideBarNote"
                onClick={() => {
                  console.log("clicked");
                  setIsSideBarNoteClicked(true);
                  setGottenTitle(note.title);
                  setGottenDate(note.date);
                  setGottenDetails(note.details);
                }}
              >
                <Note
                  title={note.title}
                  date={note.date}
                  isOnSideBar={isOnSideBar.current}
                />
              </div>
            );
          })
        )
      ) : (
        <p className="noNotes">You currently have no notes!</p>
      )}
    </div>
  );
};

export default SideBar;
