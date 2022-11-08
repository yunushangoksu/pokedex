import { createContext, useEffect, useState } from "react";
const PokeContext = createContext({});
export default PokeContext;

export const PokeProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState([]);
  const [pokeName, setPokeName] = useState("ditto");
  const [apiOffset, setApiOffset] = useState(0);

  const getAllPokemons = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${apiOffset}&limit=${6}`
    );
    const data = await res.json();
    // -------
    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setPokeData((currentList) => [...currentList, data]);
        setApiOffset(apiOffset + 6);
        pokeData.sort((a, b) => a.id - b.id);
      });
    }

    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  const loadMore = () => {
    getAllPokemons();
    setApiOffset(apiOffset + 12);
  };

  const dataToPass = {
    pokeData,
    pokeName,
    setPokeName,
    loadMore,
  };

  return (
    <PokeContext.Provider value={dataToPass}>{children}</PokeContext.Provider>
  );
};
