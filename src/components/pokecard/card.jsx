import { useContext } from "react";
import PokeContext from "../../PokeContext";
// import ditto from "../../assets/ditto.png";

function PokeCard() {
  const data = useContext(PokeContext);
  console.log(data);
  return (
    <div>
      <div className="pokeCard">
        <div className="topBar">
          <div className="name">{data ? data.name : "Loading..."}</div>
          <div className="hp">
            {data ? data.stats[0].base_stat + " hp" : "Loading..."}
          </div>
        </div>
        <div className="pokeImage">
          <img src={data ? data.sprites.front_default : "Loading..."} alt="" />
        </div>
        <div className="bottomBar">
          <div className="attack1">
            {data ? data.moves[0].move.name : "Loading..."}
          </div>
          <div className="attack2">attack2</div>
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
