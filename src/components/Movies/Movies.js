import React from "react";

import MovieCard from "./MovieCard/MovieCard";
import MovieDetails from "./MovieDetails/MovieDetails";

import useStyles from "./styles";

const Movies = () => {
  const classes = useStyles();

  return (
    <>
      <h2>Movies</h2>
      <MovieCard />
      <MovieDetails />
    </>
  );
};

export default Movies;
