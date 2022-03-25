import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import Slider from "react-slick";
import { settings } from "../settings";
import lodingImg from "../../images/Spinner-1s-216px.gif";

export default function MovieLIsting() {
  const movies = useSelector((state) => {
    return state.movies;
  });



  const shows = useSelector((state) => {
    return state.shows;
  });
 
  let renderMovies = "",
    renderShows = "";
  renderMovies =
    movies.Response && movies.Search
      ? movies.Search.map((movie, indx) => (
          <MovieCard key={indx} data={movie} />
        ))
      : "";
  renderShows =
    shows.Response && shows.Search
      ? shows.Search.map((movie, indx) => (
          <MovieCard key={indx} indx={indx} data={movie} />
        ))
      : "";

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {renderMovies === "" ? (
            <h2>NO movies found!!</h2>
          ) : (
            <Slider {...settings}>{renderMovies}</Slider>
          )}
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        {renderShows === "" ? (
          <h2>NO Shows found!!</h2>
        ) : (
          <Slider {...settings}>{renderShows}</Slider>
        )}
      </div>
    </div>
  );
}
