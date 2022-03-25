import React, { useState } from "react";
import user from "../../images/profile.jfif";
import "./Header.scss";
import { Link, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  movieActions,
} from "../../Features/movies/movieSlice";
export default function Header() {
  const dispactch = useDispatch();
  const [text, setText] = useState("");
  const onchaneHandler = (e) => {
    setText(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (text === "") return;
    try {
      dispactch(fetchAsyncMovies(text));
      dispactch(fetchAsyncShows(text));
      dispactch(movieActions.changeLastSearch(text));
    } catch (err) {
      alert(err.masseage);
    }

    setText("");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Movie App</Link>
      </div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="search-bar">
              <form action="" onSubmit={submitHandler}>
                <input
                  type="text"
                  name=""
                  id=""
                  value={text}
                  placeholder="Search movies and Show"
                  onChange={onchaneHandler}
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          }
        />
      </Routes>

      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
