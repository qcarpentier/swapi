import React from 'react';
import { useSelector } from 'react-redux';

import { Grid, CircularProgress, Button } from '@material-ui/core';

import { Route, Switch, Link } from 'react-router-dom';

import PlanetCard from './PlanetCard/PlanetCard';
import PlanetDetails from './PlanetDetails/PlanetDetails';

import useStyles from './styles';

const Planets = () => {
  const classes = useStyles();
  const planets = useSelector((state) => state.planets);

  return !planets.length ? (
    <CircularProgress />
  ) : (
    <>
      <Switch>
        <Route exact path="/planets">
          <Grid container alignItems="stretch" spacing={3}>
            {planets.map((planet) => (
              <Grid
                key={
                  isNaN(planet.url[planet.url.length - 3])
                    ? planet.url.slice(-3)
                    : planet.url.slice(-4)
                }
                item
                xs={6}
                sm={3}
              >
                <PlanetCard name={planet.name} url={planet.url} />
              </Grid>
            ))}
          </Grid>
          <Link to="/" className={classes.link}>
            <Button variant="contained" className={classes.button}>
              Back
            </Button>
          </Link>
        </Route>
        <Route exact path="/planets/:planetId">
          <PlanetDetails planets={planets} />
        </Route>
      </Switch>
    </>
  );
};

export default Planets;
