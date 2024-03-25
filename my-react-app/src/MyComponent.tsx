//To use a React Hook, import it:
import { useState } from "react";

function MyComponent() {
  //create a stateful name variable and a setter function to update that variable:
  const [name, setName] = useState("Guest"); //useState returns a variable and a setter function
  //create an age variable and increment it on click (default 21):
  const [age, setAge] = useState(21);
  //create a boolean variable and toggle it between true and false (default false):
  const [isEmployed, setIsEmployed] = useState(false);

  //update name on click (default "Guest")
  const updateName = () => {
    setName("Spongebob");
  };

  //increment age by one on click (default 21):
  const incrementAge = () => {
    setAge(age + 1);
  }

  //toggle the employed status using !isEmployed for booleans (default false)
  const toggleIsEmployed = () => {
    setIsEmployed(!isEmployed);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
      <button onClick={toggleIsEmployed}>Toggle Status</button>
    </div>
  );
}

export default MyComponent;
