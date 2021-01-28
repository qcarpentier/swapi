import React from "react";
import Movies from "./components/Movies/Movies";
import People from "./components/People/People";
import Planets from "./components/Planets/Planets";

const App = () => {
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
