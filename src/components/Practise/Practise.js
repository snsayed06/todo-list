import React, { useState } from "react";

const Practise = () => {
  const [input, setInput] = useState("");
  const [check, setCheck] = useState(false);
  const [select, setSelect] = useState("");

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const checkHandler = () => {
    setCheck((prev) => !prev);
  };

  const selectHandler = (e) => {
    setSelect(e.target.value);
  };

  return (
    <div>
      <>
        <p>
          <input
            name='input_field'
            value={input}
            placeholder='type.....'
            onChange={(e) => inputHandler(e)}
            type='text'
          />
        </p>
        <p>
          <input
            id='check'
            type='checkbox'
            value={check}
            onChange={checkHandler}
          />
          <label for='check'>Check</label>
        </p>
        <p>
          <label for='pet-select'>Choose a pet:</label>

          <select
            name='pets'
            id='pet-select'
            value={select}
            onChange={(e) => selectHandler(e)}
          >
            <option value=''>--Please choose an option--</option>
            <option value='dog'>Dog</option>
            <option value='cat'>Cat</option>
            <option value='hamster'>Hamster</option>
            <option value='parrot'>Parrot</option>
            <option value='spider'>Spider</option>
            <option value='goldfish'>Goldfish</option>
          </select>
        </p>
      </>
      <>
        <div>
          <p>Input is: {input}</p>
          <p>Check is: {JSON.stringify(check)}</p>
          <p>Select is: {select}</p>
        </div>
      </>
    </div>
  );
};

export default Practise;
