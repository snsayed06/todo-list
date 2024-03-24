import { useState } from "react";

export const AddList = ({addHandler}) => {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    value && addHandler(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={value}
          placeholder='Enter a title for this task…'
          onChange={(e) => handleInput(e)}
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};
