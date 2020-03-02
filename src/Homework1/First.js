import React, { useState } from "react";

export default function(props) {
  const [counter, setCounter] = useState(props.min);

  const increase = () => {
    if (counter + 1 <= props.max) {
      setCounter(counter + 1);
    }
  };

  const decrease = () => {
    if (counter - 1 >= props.min) {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <button onClick={increase}>+</button>
      <span> {counter} </span>
      <button onClick={decrease}>-</button>
    </div>
  );
}
