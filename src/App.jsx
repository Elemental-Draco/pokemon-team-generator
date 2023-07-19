import React from "react";
import PokemonSlot from "./components/pokemon-slot";

function App() {
  // react use effect to call to the api and then perform separators for the randomiser
  // use local storage to store every time the randomiser gets ran again, so when user reloads that team appears again
  // track the state of each slot, or whole list of pokemon?

  return <PokemonSlot pokemon="shiftry" />;
}

export default App;
