import { useContext } from "react";
import PokeContext from "../../PokeContext";

function PokeCard() {
  const data = useContext(PokeContext);
  console.log(data);

  return (
    <div className="pokeWrapper">
      <div className="pokeCard">
        {data.pokeData ? (
          <>
            <div className="topBar">
              <div className="name">{data.pokeData.name}</div>
            </div>
            <div className="pokeImage">
              <img src={data.pokeData.sprites.front_default} alt="" />
            </div>
            <div className="bottomBar">
              <div className="attack1">{data.pokeData.moves[0].move.name}</div>
              <div className="attack2">
                {data.pokeData.moves[1] ? data.pokeData.moves[1].move.name : ""}
              </div>

              <div className="pokeStats">
                <div className="hp">
                  <span>HP</span>{" "}
                  <span>{data.pokeData.stats[0].base_stat}</span>
                </div>
                <div className="attack">
                  <span>ATK</span>{" "}
                  <span>{data.pokeData.stats[1].base_stat}</span>
                </div>
                <div className="defense">
                  <span>DEF</span>{" "}
                  <span>{data.pokeData.stats[2].base_stat}</span>
                </div>
              </div>
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
