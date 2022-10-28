import { useState } from "react";
import { CounterActions } from "./CounterActions";
import { CounterInfo } from "./CounterInfo";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prevCount) => prevCount + 1);

  const handleDecrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div>
      <h1>Basic Counter Application</h1>
      <CounterInfo count={count} />
      <CounterActions
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
    </div>
  );
};
