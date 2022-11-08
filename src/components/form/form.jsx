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

    data.setPokeName(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={onChangeInput} />
      </form>
    </div>
  );
}

export default Form;
