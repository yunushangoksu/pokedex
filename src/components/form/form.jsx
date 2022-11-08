import { useContext, useState } from "react";
import PokeContext from "../../PokeContext";

function Form() {
  const data = useContext(PokeContext);
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
    console.log(inputValue);
  };

  const handleSubmit = (event) => {
    if (inputValue === "") {
      event.preventDefault();
      return;
    }

    event.preventDefault();

    data.setPokeName(inputValue.toLowerCase());
    event.target.value = "";
  };

  return (
    <div className="pokeForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={onChangeInput}
          placeholder="Enter Pokémon Name!"
        />
      </form>
    </div>
  );
}

export default Form;
