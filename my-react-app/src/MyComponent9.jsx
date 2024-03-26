// @ts-nocheck
import React, { useState, useEffect, useRef } from "react";
function MyComponent9() {
  //useRef() doesnt cause the component to re-render, instead of useState()
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    //Every time this component renders, useEffect renders this code:
    console.log("COMPONENT RENDERED");
    console.log(inputRef1);
  });

  function handleClick1() {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    //remove yellow color from other input elements when this one is yellow:
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";

    // //increase the previous state of number by 1:
    // //this causes component to re-render
    // setNumber(n => n + 1)

    // //get access to the "current" value in useRef(0):
    // ref.current++;
    // console.log(ref.current);
  }

  function handleClick2() {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "yellow";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3() {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef1.current.style.backgroundColor = "";
  }

  return (
    <div>
      <button onClick={handleClick1}>Click me 1!</button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>Click me 2!</button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>Click me 3!</button>
      <input ref={inputRef3} />
    </div>
  );
}

export default MyComponent9;
