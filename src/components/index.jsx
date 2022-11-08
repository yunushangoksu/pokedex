import React from "react";
import PokeCard from "./pokecard/card";
import Form from "./form/form";
import PokeDexLogo from "../assets/pokedexlogo.png";
import { PokeProvider } from "../PokeContext";

function Index() {
  return (
    <div>
      <img src={PokeDexLogo} alt="Logo" className="headerLogo" />
      <PokeProvider>
        <Form />
        <PokeCard />
      </PokeProvider>
    </div>
  );
}

export default Index;
