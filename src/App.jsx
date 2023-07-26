import React from "react";
import PokemonSlot from "./components/pokemon-slot";

import Sidebar from "./components/Sidebar";

function App() {
  const [pokedex, setPokedex] = React.useState(
    JSON.parse(localStorage.getItem("pokedex"))
  );

  const [selectedRegion, setSelectedRegion] = React.useState({ value: 1011 });

  const [randomPickedPokemons, setRandomPickedPokemons] = React.useState([
    { name: "bulbasaur", locked: false, dexNum: 1 },
    { name: "bulbasaur", locked: false, dexNum: 1 },
    { name: "bulbasaur", locked: false, dexNum: 1 },
    { name: "bulbasaur", locked: false, dexNum: 1 },
    { name: "bulbasaur", locked: false, dexNum: 1 },
    { name: "bulbasaur", locked: false, dexNum: 1 },
  ]);

  React.useEffect(() => {
    if (pokedex) {
      setPokedex(JSON.parse(localStorage.getItem("pokedex")));
    } else {
      console.log("ran the fetch function");
      fetch("https://pokeapi.co/api/v2/pokedex/1/")
        .then((response) => response.json())
        .then((object) => object.pokemon_entries)
        .then((pokemonArray) => {
          localStorage.setItem("pokedex", JSON.stringify(pokemonArray));
          setPokedex(pokemonArray);
        });
    }
    randomize();
  }, []);

  function changeLock(monId, isLocked) {
    setRandomPickedPokemons((prevMons) => {
      const tempArray = [...prevMons];

      tempArray[monId].locked = !isLocked;
      return tempArray;
    });
  }

  function randomize() {
    if (!pokedex) {
      return;
    }
    setRandomPickedPokemons((prevMons) => {
      return prevMons.map((mon) => {
        let randomNum = Math.floor(Math.random() * selectedRegion.value);
        return mon.locked
          ? mon
          : {
              locked: false,
              name: pokedex[randomNum].pokemon_species.name,
              dexNum: randomNum + 1,
            };
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
          dexNum={mon.dexNum}
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
    <div className="flex">
      <Sidebar randomize={randomize} setSelectedRegion={setSelectedRegion} />
      <div className="bg-blue-200 grid grid-cols-2 grid-rows-3 justify-items-center max-w-[40%] min-w-[500px] mx-auto p-20 h-full ">
        {showPokemons(randomPickedPokemons)}
      </div>
    </div>
  );
}

export default App;
