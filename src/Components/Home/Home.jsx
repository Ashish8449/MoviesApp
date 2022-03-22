import React, { useEffect } from "react";
import MovieLIsting from "../MovieListing/MovieLIsting";

import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../Features/movies/movieSlice";

export default function Home() {
  const dispactch = useDispatch();
  useEffect(() => {
    dispactch(fetchAsyncMovies());
    dispactch(fetchAsyncShows());
  }, [dispactch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieLIsting />
    </div>
  );
}
