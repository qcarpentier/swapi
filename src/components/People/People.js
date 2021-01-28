import React from "react";

import CharacterCard from "./CharacterCard/CharacterCard";
import CharacterDetails from "./CharacterDetails/CharacterDetails";

import useStyles from "./styles";

const People = () => {
  const classes = useStyles();

  return (
    <>
      <h2>People</h2>
      <CharacterCard />
      <CharacterDetails />
    </>
  );
};

export default People;
