import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setIsNotesPageNoteClicked } from "../../redux/app/app.actions";
import Header from "../../components/Header/Header";
import "./homepage.scss";
import { useEffect } from "react";

const Homepage = () => {
  const dispatch = useDispatch();

  const isNotesPageNoteClicked = useSelector(
    (state) => state.app.isNotesPageNoteClicked
  );

  useEffect(() => {
    console.log(isNotesPageNoteClicked, "homepage");
  });

  return (
    <div className="homepageContainer">
      <Header />
      <div className="homepage">
        <Link className="homepage__link Link" to="/notes">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>note-list</title>
            <path d="M5 11h23v9h-4.994c-1.108 0-2.006 0.887-2.006 1.998v6.002h-14.006c-1.101 0-1.994-0.902-1.994-2.001v-14.999zM5 10v-2.999c0-1.105 0.902-2.001 2.001-2.001h18.998c1.105 0 2.001 0.893 2.001 1.992v3.008h-23zM22 28v-5.997c0-0.554 0.451-1.003 0.991-1.003h5.009l-6 7zM13 18v1h7v-1h-7zM8 17v3h3v-3h-3zM9 18v1h1v-1h-1zM13 14v1h12v-1h-12zM8 13v3h3v-3h-3zM9 14v1h1v-1h-1zM13 22v1h6v-1h-6zM8 21v3h3v-3h-3zM9 22v1h1v-1h-1z"></path>
          </svg>
          <p>View Notes</p>
        </Link>

        <Link className="homepage__link Link" to="/take-note">
          <svg
            onClick={() => {
              dispatch(setIsNotesPageNoteClicked(false));
            }}
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <title>add_circle</title>
            <path d="M17.016 12.984v-1.969h-4.031v-4.031h-1.969v4.031h-4.031v1.969h4.031v4.031h1.969v-4.031h4.031zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"></path>
          </svg>
          <p>Take Note</p>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
