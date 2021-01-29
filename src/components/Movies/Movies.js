import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Grid, CircularProgress } from '@material-ui/core';

import {
  Route,
  Switch,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';

import MovieCard from './MovieCard/MovieCard';
import MovieDetails from './MovieDetails/MovieDetails';

import useStyles from './styles';

const Movies = () => {
  const [movieId, setMovieId] = useState();
  const classes = useStyles();
  const movies = useSelector((state) => state.movies);
  const { url } = useRouteMatch();

  return !movies.length ? (
    <CircularProgress />
  ) : (
    <>
      <Switch>
        <Route exact path="/movies">
          <Grid container alignItems="stretch" spacing={3}>
            {movies.map((movie) => (
              <Grid key={movie.episode_id} item xs={12} sm={6}>
                <MovieCard movie={movie} setMovieId={setMovieId} />
              </Grid>
            ))}
          </Grid>
        </Route>
        <Route exact path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </>
  );
};

export default Movies;
