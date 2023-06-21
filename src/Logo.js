import React from "react";

// function logWhenClicked() {
//   console.log("React is fun!");
// }

const Logo = (props) => {
  return (
    <header>
      <div>
        <h1>Welcome to {props.appName}</h1>
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          onClick={props.handleClick}
          alt="Pokemon"
        ></img>
      </div>
    </header>
  );
};

export default Logo;
