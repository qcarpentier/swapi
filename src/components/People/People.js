import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, CircularProgress, Button } from '@material-ui/core';

import { Route, Switch, Link } from 'react-router-dom';

import CharacterCard from './CharacterCard/CharacterCard';
import CharacterDetails from './CharacterDetails/CharacterDetails';

import useStyles from './styles';

const People = () => {
  const classes = useStyles();
  const people = useSelector((state) => state.people);

  return !people.length ? (
    <CircularProgress />
  ) : (
    <>
      <Switch>
        <Route exact path="/people">
          <Grid container alignItems="stretch" spacing={3}>
            {people.map((character) => (
              <Grid
                key={
                  isNaN(character.url[character.url.length - 3])
                    ? character.url.slice(-3)
                    : character.url.slice(-4)
                }
                item
                xs={6}
                sm={3}
              >
                <CharacterCard character={character} />
              </Grid>
            ))}
          </Grid>
          <Link to="/" className={classes.link}>
            <Button variant="contained" className={classes.button}>
              Back
            </Button>
          </Link>
        </Route>
        {/* NEED FIX: /people/:id never call CharacterDetails component , Route path problem?*/}
        <Route exact path="/people/:id">
          <CharacterDetails people={people} />
        </Route>
      </Switch>
    </>
  );
};

export default People;
