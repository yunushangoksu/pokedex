import { useContext } from "react";
import PokeContext from "../../PokeContext";
import PokeCard from "../pokecard/card";

function List() {
  const data = useContext(PokeContext);
  return (
    <>
      <div className="pokeWrapper">
        {data.pokeData.map((pokeStats) => {
          return (
            <PokeCard
              key={pokeStats.id}
              pokeImg={
                pokeStats.sprites.other["official-artwork"].front_default
              }
              pokeName={pokeStats.name}
              pokeMove1={pokeStats.moves[0].move.name}
              pokeMove2={pokeStats.moves[1].move.name}
              pokeHp={pokeStats.stats[0].base_stat}
              pokeAttack={pokeStats.stats[1].base_stat}
              pokeDefense={pokeStats.stats[2].base_stat}
            />
          );
        })}
      </div>
      <button className="loadMoreButton" onClick={data.loadMore}>
        Load More
      </button>
    </>
  );
}

export default List;
