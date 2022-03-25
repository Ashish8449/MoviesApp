import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import lodingImg from "../../images/Spinner-1s-216px.gif";
import {
  fetchAsyncMovieOrShowDetail,
  movieActions,
} from "../../Features/movies/movieSlice";
import "./MovieDetail.scss";
export default function MovieDetails() {
  const { imdbID } = useParams();
  const dispactch = useDispatch();
  const data = useSelector((state) => state.selectMovieOrShow);
  

  useEffect(() => {
    dispactch(fetchAsyncMovieOrShowDetail(imdbID));
    return () => {
      dispactch(movieActions.removeSelectedMovieOrShow());
    };
  }, [dispactch, imdbID]);
  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div className="loader">
          <div>
            <img src={lodingImg} alt=""  />
          </div>
        </div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"></i> : {data.imdbRating}
              </span>
              <span>
                IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                {data.imdbVotes}
              </span>
              <span>
                Runtime <i className="fa fa-film"></i> : {data.Runtime}
              </span>
              <span>
                Year <i className="fa fa-calendar"></i> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
}
