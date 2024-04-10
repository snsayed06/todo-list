import React, { useState, useEffect } from "react";
import data from "./Data";

const AutoComplete = () => {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState([]);
  const [search, setSearched] = useState([]);
  const countries = data;

  useEffect(() => {
    const searchedCountry = countries.filter((country) =>
      country.toLowerCase().includes(input.toLowerCase())
    );
    setSearched([...searchedCountry]);
  }, [input]);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const selectHandler = (word) => {
    if (!selected.includes(word)) {
      setSelected([...selected, word]);
      setInput('')
    }
  };

  const removeSelectHandler = (word) => {
    const remove = selected.filter((country) => word !== country);
    setSelected([...remove]);
  };

  return (
    <div>
      {selected && (
        <div>
          {selected.map((word, index) => {
            return (
              <span onClick={() => removeSelectHandler(word)} key={index}>
                {word}
              </span>
            );
          })}
        </div>
      )}

      <div>
        <input type='text' value={input} onChange={(e) => inputHandler(e)} />
      </div>

      {input && (
        <div>
          {input.length &&
            search.map((search, index) => {
              return (
                <p onClick={() => selectHandler(search)} key={index}>
                  {search}
                </p>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default AutoComplete;