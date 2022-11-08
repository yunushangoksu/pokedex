import React from "react";

function PokeCard({
  pokeName,
  pokeImg,
  pokeMove1,
  pokeMove2,
  pokeHp,
  pokeAttack,
  pokeDefense,
}) {
  return (
    <div className="pokeCard">
      <div className="topBar">
        <div className="name">{pokeName}</div>
      </div>
      <div className="pokeImage">
        <img src={pokeImg} alt="" />
      </div>
      <div className="bottomBar">
        <div className="attack1">{pokeMove1}</div>
        <div className="attack2">{pokeMove2}</div>

        <div className="pokeStats">
          <div className="hp">
            <span>HP</span> <span>{pokeHp}</span>
          </div>
          <div className="attack">
            <span>ATK</span> <span>{pokeAttack}</span>
          </div>
          <div className="defense">
            <span>DEF</span> <span>{pokeDefense}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokeCard;
