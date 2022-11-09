import React from "react";
import List from "./list/list";
// import Form from "./form/form";
import PokeDexLogo from "../assets/pokedexlogo.png";
import { PokeProvider } from "../PokeContext";

function Index() {
  return (
    <div>
      <img src={PokeDexLogo} alt="Logo" className="headerLogo" />

      <PokeProvider>
        {/* <Form /> */}
        <List />
      </PokeProvider>
    </div>
  );
}

export default Index;
