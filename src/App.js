import React, { useState, useEffect } from "react";
import Movies from "./components/Movies/Movies";
import People from "./components/People/People";
import Planets from "./components/Planets/Planets";

import { useDispatch } from "react-redux";

import { getMovies, getPeople, getPlanets } from "./actions";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getPeople());
    dispatch(getPlanets());
  }, [dispatch]);

  return (
    <>
      <h1>Star Wars</h1>
      <Movies />
      <People />
      <Planets />
    </>
  );
};

export default App;
