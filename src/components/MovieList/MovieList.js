import React from "react";
import MovieCard from "../MovieCard/MovieCard";
import "../../App.css";
const MovieList = ({ movies, text, rate, deletMovie }) => {
  const filtred = movies
    .filter((film) => film.name.toLowerCase().includes(text.toLowerCase()))
    .filter((film) => film.rating >= rate);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {filtred.length ? (
        filtred.map((movie) => (
          <MovieCard movie={movie} key={movie.id} deletMovie={deletMovie} />
        ))
      ) : (
        <img
          className="error"
          src="https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif"
          alt="imagebro"
        ></img>
      )}
    </div>
  );
};

export default MovieList;
