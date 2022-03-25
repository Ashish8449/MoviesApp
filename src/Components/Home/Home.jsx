import React, { useEffect } from "react";
import MovieLIsting from "../MovieListing/MovieLIsting";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../Features/movies/movieSlice";

export default function Home() {
  const lastSearch = useSelector((state) => state.lastSearch);
  console.log("home component rerender");

  const dispactch = useDispatch();
  useEffect(() => {
    console.log(lastSearch);
    dispactch(fetchAsyncMovies(lastSearch));
    dispactch(fetchAsyncShows(lastSearch));
  });
  return (
    <div>
      <div className="banner-img"></div>
      <MovieLIsting />
    </div>
  );
}
