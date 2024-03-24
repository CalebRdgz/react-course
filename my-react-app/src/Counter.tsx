import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  //increament the counter:
  const increment = () => {
    setCount(count + 1);
  };

  //decrement the count:
  const decrement = () => {
    setCount(count - 1)
  }

  //reset the count:
  const reset = () => {
    setCount(0)
  }

  //return some elements:
  return (
    <div className="counter-container">
      <p className="count-display">{count}</p>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-button" onClick={reset}>
        Reset
      </button>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
