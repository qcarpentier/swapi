import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, CircularProgress, Button } from '@material-ui/core';

import { Route, Switch, Link } from 'react-router-dom';

import MovieCard from './MovieCard/MovieCard';
import MovieDetails from './MovieDetails/MovieDetails';

import useStyles from './styles';

const Movies = () => {
  const classes = useStyles();
  const movies = useSelector((state) => state.movies);

  return !movies.length ? (
    <CircularProgress />
  ) : (
    <>
      <Switch>
        <Route exact path="/movies">
          <Grid container alignItems="stretch" spacing={3}>
            {movies.map((movie) => (
              <Grid key={movie.episode_id} item xs={12} sm={6}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
          <Link to="/" className={classes.link}>
            <Button variant="contained" className={classes.button}>
              Back
            </Button>
          </Link>
        </Route>
        <Route exact path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </>
  );
};

export default Movies;
