import { useContext } from "react";
import PokeContext from "../../PokeContext";

function PokeCard() {
  const data = useContext(PokeContext);
  console.log(data);
  return (
    <div>
      <div className="pokeCard">
        {data.pokeData ? (
          <>
            <div className="topBar">
              <div className="name">{data.pokeData.name}</div>
              <div className="hp">{data.pokeData.stats[0].base_stat}</div>
            </div>
            <div className="pokeImage">
              <img src={data.pokeData.sprites.front_default} alt="" />
            </div>
            <div className="bottomBar">
              <div className="attack1">{data.pokeData.moves[0].move.name}</div>
              <div className="attack2">attack2</div>
            </div>
          </>
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}

export default PokeCard;
