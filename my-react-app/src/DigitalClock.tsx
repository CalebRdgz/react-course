import { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  //[] = set a new timer only when we mount the component
  useEffect(() => {
    //after every second, update the state of time:
    const intervalId = setInterval(() => {
        setTime(new Date())
    }, 1000);

    return () => {
        clearInterval(intervalId);
    }
  }, []);

  function formatTime(){
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    //convert from military time (if it's 0 = false, so goes to 12 instead):
    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
  }

  function padZero(number: number){
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
}

export default DigitalClock;
