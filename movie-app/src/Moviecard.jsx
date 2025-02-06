import React from "react";

const Moviecard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.year}</p>
      </div>

      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://demofree.sirv.com/nope-not-here.jpg?w=150"
          }
          alt=""
        />
      </div>

      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
      </div>
    </div>
  );
};

export default Moviecard;
