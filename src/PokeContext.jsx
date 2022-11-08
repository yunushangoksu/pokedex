import { createContext, useEffect, useState } from "react";
const PokeContext = createContext({});
export default PokeContext;

export const PokeProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState([]);
  // const [pokeMoveData, setPokeMoveData] = useState();
  const [pokeName, setPokeName] = useState("ditto");
  const dataToPass = {
    pokeData,
    pokeName,
    setPokeName,
  };

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=22offset=0"
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
        await pokeData.sort((a, b) => a.id - b.id);
      });
    }

    createPokemonObject(data.results);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  //       .then((response) => response.json())
  //       .then((data) => setPokeData(data))
  //       .catch((err) => console.log(err));
  //   };

  //   fetchData();
  // }, [pokeName]);

  // useEffect(() => {
  //   const fetchData = () => {
  //     fetch(pokeData.moves[0].move.url)
  //       .then((response) => response.json())
  //       .then((data) => setPokeMoveData(data))
  //       .catch((err) => console.log(err));
  //   };
  //   fetchData();
  //   console.log(pokeData);
  //   console.log(pokeMoveData);
  // }, [pokeData]);

  return (
    <PokeContext.Provider value={dataToPass}>{children}</PokeContext.Provider>
  );
};
