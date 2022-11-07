import React from "react";
import PokeDexLogo from "../assets/pokedexlogo.png";
import { PokeProvider } from "../PokeContext";
import PokeCard from "./pokecard/card";

function Index() {
  return (
    <div>
      <img src={PokeDexLogo} alt="Logo" className="headerLogo" />
      <PokeProvider>
        <PokeCard />
      </PokeProvider>
    </div>
  );
}

export default Index;
