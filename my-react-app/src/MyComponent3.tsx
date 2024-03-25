import React, {useState} from 'react';

function MyComponent3(){
    const [count, setCount] = useState(0);

    function increment(){
        //uses PENDING state to calculate the NEXT state.
        //React puts your updater function in a queue (waiting in line)
        //set functions do not trigger an update
        //React batches together state updated for perfomrance reasons
        //NEXT state becomes the CURRENT state after an update
        //c = previous Count, NOT the CURRENT count:
        setCount((c) => c + 1);
        setCount((c) => c + 1);
        setCount((c) => c + 1);
    }

    function decrement(){
        setCount(c => c - 1)
    }

    function reset(){
        //dont need an updater function here because dont need the previous state (simply set count to 0):
        setCount(0)
    }

    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    );
}

export default MyComponent3;