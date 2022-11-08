import { createContext, useEffect, useState } from "react";
const PokeContext = createContext({});
export default PokeContext;

export const PokeProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState();
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

  //   await fetch("https://pokeapi.co/api/v2/move/144/")
  //   .then((response) => response.json())
  //   .then((data) => setPokeData(...pokeData, data))
  //   .catch((err) => console.log(err));
  // };

  return (
    <PokeContext.Provider value={dataToPass}>{children}</PokeContext.Provider>
  );
};
