import React, { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';

import Header from './components/Header/Header';
import Explorer from './components/Explorer/Explorer';
import Movies from './components/Movies/Movies';
import People from './components/People/People';
import Planets from './components/Planets/Planets';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { getMovies, getPeople, getPlanets } from './actions';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [pageTitle, setPageTitle] = useState('Explorer');

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getPeople());
    dispatch(getPlanets());
  }, [dispatch]);

  return (
    <Router>
      <Container maxwidth="lg" className="root">
        <Header pageTitle={pageTitle} />

        <Switch>
          <Route exact path="/">
            <Explorer setPageTitle={setPageTitle} />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/planets">
            <Planets />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
