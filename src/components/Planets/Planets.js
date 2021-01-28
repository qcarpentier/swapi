import React from "react";

import PlanetCard from "./PlanetCard/PlanetCard";
import PlanetDetails from "./PlanetDetails/PlanetDetails";

import useStyles from "./styles";

const Planets = () => {
  const classes = useStyles();

  return (
    <>
      <h2>Planets</h2>
      <PlanetCard />
      <PlanetDetails />
    </>
  );
};

export default Planets;
