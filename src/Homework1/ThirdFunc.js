import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";

export default function ThirdFunc(props) {
  const [counter, setCounter] = useState(props.min);

  let dec = React.createRef();
  let inc = React.createRef();

  useEffect(() => {
    if (props.min > props.max)
      throw new Error("min can't be greather than max");

    counter === props.min
      ? (dec.current.disabled = true)
      : (dec.current.disabled = false);
    counter === props.max
      ? (inc.current.disabled = true)
      : (inc.current.disabled = false);
  }, [counter]);

  const set = newCounter => {
    const { min, max } = props;
    newCounter = Math.min(max, Math.max(min, newCounter));
    setCounter(newCounter);
  };

  const increase = () => {
    set(counter + 1);
  };

  const decrease = () => {
    set(counter - 1);
  };

  const inputChangeHandler = e => {
    let value = +e.target.value;
    set(isNaN(value) ? props.min : value);
  };

  return (
    <div>
      <Button ref={dec} variant="dark" onClick={decrease}>
        -
      </Button>
      <input value={counter} onChange={inputChangeHandler} />
      <Button ref={inc} variant="dark" onClick={increase}>
        +
      </Button>
    </div>
  );
}

ThirdFunc.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
