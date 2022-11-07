import { createContext, useEffect, useState } from "react";
const PokeContext = createContext({});
export default PokeContext;

export const PokeProvider = ({ children }) => {
  const [pokeData, setPokeData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response) => response.json())
        .then((data) => setPokeData(data))
        .catch((err) => console.log(err));
    };

    fetchData();
  }, []);

  return (
    <PokeContext.Provider value={pokeData}>{children}</PokeContext.Provider>
  );
};
