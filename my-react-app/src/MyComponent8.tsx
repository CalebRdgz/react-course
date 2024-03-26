import { useState, useEffect } from "react";

function MyComponent8() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

//   //update the sieze of our window without useEffect():
//   window.addEventListener("resize", handleResize);
//   console.log("EVENT LISTENER ADDED")

  //update the size of our window with useEffect():
  // useEffect(() => {
  //   window.addEventListener("resize", handleResize);
  //   console.log("EVENT LISTENER ADDED")

  //   return () => {
  //       //CLEANUP CODE: Remove the Event Listener
  //       window.removeEventListener("resize", handleResize);
  //       console.log("EVENT LISTENER REMOVED")
  //   }
  // }, [])

  //update the title of the document to display the width and the height:
  //every time the width and height changes, update the title:
  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
  }, [width, height])

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <p>Window Width: {width}</p>
      <p>Window Height: {height}</p>
    </>
  );
}

export default MyComponent8;
