import { useState, useEffect } from "react";
function MyComponent7() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green")

  //   //Update the tab while this component re-renders^:
  //   useEffect(() => {
  //     document.title = `Count: ${count}`;
  //   });

  //   //Side code only runs when the component mounts (one and done):
  //   useEffect(() => {
  //     document.title = `My Counter Program`;
  //   }, []);

  //When our component mounts + when 'count' changes (instead of anything else), do this side code:
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;

    return () => {
        //SOME CLEANUP CODE
    }
  }, [count, color]);

  function addCount() {
    //c = previous state of count:
    setCount((c) => c + 1);
  }

  function subtractCount(){
    setCount((c) => c - 1);
  }

  function changeColor(){
    setColor((c) => c === "green" ? "red" : "green")
  }

  return (
    <>
      <p style={{color: color}}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button><br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent7;
