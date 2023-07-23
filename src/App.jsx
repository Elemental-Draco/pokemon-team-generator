import React from "react";
import PokemonSlot from "./components/pokemon-slot";
import MoreInfoPopup from "./components/More-Info-Popup";

function App() {
  const [pokedex, setPokedex] = React.useState(
    localStorage.getItem("pokedex")
      ? JSON.parse(localStorage.getItem("pokedex"))
      : fetchPokemon()
  );

  const [randomPickedPokemons, setRandomPickedPokemons] = React.useState([
    { name: "iron-thorns", locked: true, dexNum: 995 },
    { name: "ditto", locked: false, dexNum: 132 },
    { name: "ditto", locked: true, dexNum: 132 },
    { name: "ditto", locked: true, dexNum: 132 },
    { name: "ditto", locked: true, dexNum: 132 },
    { name: "ditto", locked: true, dexNum: 132 },
  ]);

  const [showingPopup, setShowingPopup] = React.useState(true);

  async function fetchPokemon() {
    console.log("ran the fetch function");
    const pokedex = await fetch("https://pokeapi.co/api/v2/pokedex/1/")
      .then((response) => response.json())
      .then((object) => object.pokemon_entries);
    localStorage.setItem("pokedex", JSON.stringify(pokedex));

    return pokedex;
  }

  function changeLock(monId, isLocked) {
    setRandomPickedPokemons((prevMons) => {
      const tempArray = [...prevMons];

      tempArray[monId].locked = !isLocked;
      return tempArray;
    });
  }

  function randomize() {
    // evolves from species === null means baby pokemon
    // grab from localstorage/call to the api to find that data for a random num picked pokemon. default to fully evolved pokemon only.
    setRandomPickedPokemons((prevMons) => {
      return prevMons.map((mon) => {
        let randomNum = Math.floor(Math.random() * 1011);
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
    <>
      {showingPopup && <MoreInfoPopup setShowingPopup={setShowingPopup} />}
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
