import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
const MovieCard = ({ movie, deletMovie }) => {
  return (
    <div
      className="moviecards"
      style={{
        width: 300,
        border: "2px black solid",
      }}
    >
      <img src={movie.image} alt={movie.name} width={300} />
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
      <Rating name="read-only" value={movie.rating} readOnly />
      <Link to={`/Details/${movie.id}`}>
        <button> View Details </button>
      </Link>
      <button onClick={() => deletMovie(movie.id)}>X</button>
    </div>
  );
};

export default MovieCard;
