import React, { useState } from "react";

function randomPokemon() {
  const pokemons = ["Pikachu", "Snorlax", "Eevie", "Arceus"];
  return pokemons[Math.floor(Math.random() * pokemons.length)];
}

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  function catchPokemon() {
    setCaught(caught.concat(randomPokemon()));
  }

  return (
    <>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((name, index) => {
          return <li key={index}>{name}</li>;
        })}
      </ul>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </>
  );
};

export default CaughtPokemon;
