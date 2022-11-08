import { createContext, useEffect, useState } from "react";
const PokeContext = createContext({});
export default PokeContext;

export const PokeProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState();
  // const [pokeMoveData, setPokeMoveData] = useState();
  const [pokeName, setPokeName] = useState("ditto");
  const dataToPass = {
    pokeData,
    pokeName,
    setPokeName,
  };

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then((response) => response.json())
        .then((data) => setPokeData(data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, [pokeName]);

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
