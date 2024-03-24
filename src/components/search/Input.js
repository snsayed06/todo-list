import { useState } from "react";

const Input = ({ setKeyWord }) => {
  const [word, setWord] = useState("");

  const wordHandler = (event) => {
    setWord(event.target.value);
    setKeyWord(event.target.value);
  };
  return <input type='text' value={word} onChange={(e) => wordHandler(e)} />;
};
export default Input;
