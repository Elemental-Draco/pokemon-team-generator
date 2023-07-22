import React from "react";

export default function MoreInfoPopup(props) {
  return (
    <>
      <div className=" opacity-80 bg-black fixed z-30 top-0 bottom-0 left-0 right-0 w-full h-full"></div>
      <div className="absolute top-[50%] left-[50%] w-[500px] h-[350px] z-40 bg-white translate-x-[-50%] translate-y-[-50%] ">
        <h1>{props.randomPickedPokemons[0].name}</h1>
        <button className="text-3xl text-red-700 ">X</button>
      </div>
      ;
    </>
  );
}
