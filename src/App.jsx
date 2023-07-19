import React from "react";
import PokemonSlot from "./components/pokemon-slot";
import MoreInfoButton from "./components/More-Info-Button";

function App() {
  const [randomPickedPokemons, setRandomPickedPokemons] = React.useState([
    { name: "pichu", locked: true },
    { name: "groudon", locked: false },
    { name: "garchomp", locked: true },
    { name: "weepinbell", locked: true },
    { name: "toxapex", locked: true },
    { name: "mew", locked: true },
  ]);

  function changeLock(monId, isLocked) {
    setRandomPickedPokemons((prevMons) => {
      const tempArray = [...prevMons];

      tempArray[monId].locked = !isLocked;
      return tempArray;
    });
  }

  function randomize() {
    setRandomPickedPokemons((prevMons) => {
      return prevMons.map((mon) => {
        return mon.locked ? mon : { ...mon, name: "pikachu" };
      });
    });
  }

  function showPokemons(pokemons) {
    let slot = 0;
    return pokemons.map((mon) => {
      slot += 1;
      return (
        <PokemonSlot
          id={slot - 1}
          key={slot}
          pokemon={mon.name}
          locked={mon.locked}
          changeLock={changeLock}
        />
      );
    });
  }

  // react use effect to call to the api and then perform separators for the randomiser
  // use local storage to store every time the randomiser gets ran again, so when user reloads that team appears again

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 max-w-[80%] mx-auto">
        <>{showPokemons(randomPickedPokemons)}</>
      </div>
      <button onClick={randomize} className="w-[100px] h-[50px]">
        Randomize!
      </button>
    </>
  );
}

export default App;
