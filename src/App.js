import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  function logWhenClicked() {
    console.log("React is fun!");
  }
  return (
    <div>
      <Logo appName="Irianni's Pokedex" handleClick={logWhenClicked} />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
    </div>
  );
}

export default App;
