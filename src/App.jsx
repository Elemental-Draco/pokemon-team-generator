import React from "react";
import PokemonSlot from "./components/pokemon-slot";

function App() {
  const [randomPickedPokemons, setRandomPickedPokemons] = React.useState([]);

  function showPokemons(pokemons) {
    return pokemons.map((mon) => {
      // for each pokemon, make a corresponding PokemonSlot component and return it
    });
  }

  // react use effect to call to the api and then perform separators for the randomiser
  // use local storage to store every time the randomiser gets ran again, so when user reloads that team appears again
  // track the state of each slot, or whole list of pokemon?

  return (
    <div className="grid grid-cols-2 grid-rows-3 w-[50%]">
      <PokemonSlot pokemon="shiftry" />
      <PokemonSlot pokemon="pichu" />
      <PokemonSlot pokemon="garchomp" />
      <PokemonSlot pokemon="toxapex" />
      <PokemonSlot pokemon="wurmple" />
      <PokemonSlot pokemon="mrmime" />
    </div>
  );
}

export default App;
