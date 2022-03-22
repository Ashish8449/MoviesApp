import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
export default function MovieLIsting() {
  const movies = useSelector((state) => {
    return state.movies;
  });
  console.log(movies);
  const shows = useSelector((state) => {
    return state.shows;
  });
  console.log(shows);
  let renderMovies = "",
    renderShows = "";
  renderMovies = movies.Response ? (
    movies.Search.map((movie, indx) => <MovieCard key={indx} data={movie} />)
  ) : (
    <h2>NO movies found!!</h2>
  );
  renderShows = shows.Response ? (
    shows.Search.map((movie, indx) => (
      <MovieCard key={indx} indx={indx} data={movie} />
    ))
  ) : (
    <h2>NO movies found!!</h2>
  );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
}
