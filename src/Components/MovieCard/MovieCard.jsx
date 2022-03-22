import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

export default function MovieCard(props) {
  const { data, indx } = props;
 

  return (
    <div
      className="card-item"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
