/* eslint-disable react/prop-types */
import React from "react";

export default function PokemonSlot(props) {
  let pokemonGif = `https://play.pokemonshowdown.com/sprites/ani/${props.pokemon}.gif`;

  return (
    <>
      <div className=" flex flex-col ml-10 mt-10 w-[150px]">
        <p className="text-xl font-bold">{props.pokemon}</p>

        <div className="w-[150px] h-[150px] flex bg-red-700 items-center justify-center">
          <img
            src={
              props.dexNum < 899
                ? pokemonGif
                : ` https://play.pokemonshowdown.com/sprites/dex/${props.pokemon}.png`
            }
            alt="this pokemon"
            className=""
          />
        </div>

        <div className="w-full flex justify-between">
          <button className="text-xl bg-cyan-600 rounded-xl p-2">
            More info
          </button>
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
