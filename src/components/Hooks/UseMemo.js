import { useState, useMemo } from "react";

const UseMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const incrementHandlerCounter1 = () => {
    console.log("incre");
    setCounter1((prev) => prev + 1);
  };

  const decrementHandlerCounter2 = () => {
    console.log("decre");
    setCounter2((prev) => prev - 1);
  };

  const squared = () => {
    console.log("squared");
    return counter1 * counter1;
  };

  const memo = useMemo(squared, [counter1]);

  return (
    <div>
      <p>{counter1}</p>
      <p>{memo}</p>
      <button onClick={incrementHandlerCounter1}>increment</button>
      <p>{counter2}</p>
      <button onClick={decrementHandlerCounter2}>decrement</button>
    </div>
  );
};

export default UseMemo;
