import React from "react";
import { useState, useEffect, useRef } from "react";

function Stopwatch() {
  //isRunning initial state to false:
  const [isRunning, setIsRunning] = useState(false);
  //elapsedTime initial state to 0:
  const [elapsedTime, setElapsedTime] = useState(0);
  //start an interval, then clear it using useRef():
  const intervalIdRef = useRef(null);
  //get current time when starting stopwatch with useRef():
  const startTimeRef = useRef(0);

  //if isRunning ever changes, perform this side code:
  useEffect(() => {
    if (isRunning) {
      //create an interval to move time forward:
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    //return a cleanup function:
    return () => {
        clearInterval(intervalIdRef.current);
    }
  }, [isRunning]);

  function start() {
    //when start button clicked, set state of setIsRunning to true (from false)
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    //conver to hours, minutes, seconds, and milliseconds:
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
    let seconds = Math.floor(elapsedTime / (1000) % 60)
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0")
    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button className="start-button" onClick={start}>
          Start
        </button>
        <button className="stop-button" onClick={stop}>
          Stop
        </button>
        <button className="reset-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
