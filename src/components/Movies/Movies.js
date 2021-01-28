import React from "react";
import { useSelector } from "react-redux";

import MovieCard from "./MovieCard/MovieCard";
import MovieDetails from "./MovieDetails/MovieDetails";

import useStyles from "./styles";

const Movies = () => {
  const classes = useStyles();
  const movies = useSelector((state) => state.movies);

  return (
    <>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <p>{movie.title}</p>
      ))}
    </>
  );
};

export default Movies;
