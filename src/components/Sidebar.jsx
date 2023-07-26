import React from "react";

export default function Sidebar(props) {
  const [showCustomOptions, setShowCustomOptions] = React.useState(false);

  function checkIfSelected() {
    if (document.getElementById("custom-option").checked) {
      setShowCustomOptions(true);
    } else {
      setShowCustomOptions(false);
      props.setSelectedRegion({ value: 1011 });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.randomize();
  }

  function handleChange() {
    props.setSelectedRegion(
      document.querySelector('input[ name="until-gen"]:checked')
    );
  }

  return (
    <aside className="flex flex-col bg-green-400 max-w-sm p-8 text-xl">
      <h1>Random Team Generator</h1>
      <form
        action=""
        className="flex flex-col"
        onChange={checkIfSelected}
        onSubmit={handleSubmit}
      >
        <label className="mb-5">
          National Dex
          <input
            type="radio"
            name="pokedex-type"
            value="national-dex"
            defaultChecked
            className="ml-[5px]"
            required
          />
        </label>

        <label className="mt-5">
          Until Gen...
          <input
            type="radio"
            name="pokedex-type"
            value="custom"
            id="custom-option"
            className="ml-[5px]"
          />
        </label>

        {showCustomOptions && (
          <div
            className="grid auto-rows-auto grid-cols-2 gap-2 mt-5"
            onChange={handleChange}
          >
            <label htmlFor="kanto">
              <input type="radio" name="until-gen" value="152" required />
              Kanto
            </label>
            <label htmlFor="johto">
              <input type="radio" name="until-gen" value="252" />
              Johto
            </label>
            <label htmlFor="">
              <input type="radio" name="until-gen" value="387" />
              Hoenn
            </label>
            <label htmlFor="">
              <input type="radio" name="until-gen" value="494" />
              Sinnoh
            </label>
            <label htmlFor="">
              <input type="radio" name="until-gen" value="650" />
              Unova
            </label>
            <label htmlFor="">
              <input type="radio" name="until-gen" value="722" />
              Kalos
            </label>
            <label htmlFor="">
              <input type="radio" name="until-gen" value="810" />
              Alola
            </label>
            <label htmlFor="">
              <input type="radio" name="until-gen" value="906" />
              Galar
            </label>
            <label htmlFor="">
              <input type="radio" name="until-gen" value="1011" />
              Paldea
            </label>
          </div>
        )}
        <button
          type="submit"
          className="w-[150px] h-[60px] bg-purple-600 rounded-lg font-bold text-lg mt-10"
        >
          Randomize!
        </button>
      </form>
    </aside>
  );
}
