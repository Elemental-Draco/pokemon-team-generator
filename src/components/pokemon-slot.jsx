/* eslint-disable react/prop-types */
import React from "react";

export default function PokemonSlot(props) {
  function replaceDashes(pokemonName) {
    return pokemonName.replace("-", "");
  }

  // use this if a gif does exist here for this pokemon
  let pokemonGif = `https://play.pokemonshowdown.com/sprites/ani/${replaceDashes(
    props.pokemon
  )}.gif`;

  // image that will be used for new gen pokemon that dont have gifs
  let pokemonImg = `https://play.pokemonshowdown.com/sprites/dex/${replaceDashes(
    props.pokemon
  )}.png`;

  let capitalizedMon =
    props.pokemon.charAt(0).toUpperCase() + props.pokemon.slice(1);

  return (
    <>
      <div className=" flex flex-col ml-10 mt-10 w-[150px]">
        <p className="text-xl font-bold">{capitalizedMon}</p>

        <div className="w-[150px] h-[150px] flex bg-black bg-opacity-10 rounded-xl  items-center justify-center">
          <img
            src={props.dexNum < 899 ? pokemonGif : pokemonImg}
            alt={capitalizedMon}
            className=""
          />
        </div>

        <div className="w-full flex justify-between">
          <a
            href={`https://www.serebii.net/pokemon/${replaceDashes(
              props.pokemon
            )}/`}
            target="_blank"
            rel="noreferrer"
            className="text-xl bg-cyan-600 rounded-xl p-2"
            id={props.id}
          >
            More info
          </a>
          <p
            className="text-2xl hover:cursor-pointer"
            onClick={() => props.changeLock(props.id, props.locked)}
          >
            {props.locked ? "🔒" : "🔓"}
          </p>
        </div>
      </div>
    </>
  );
}
