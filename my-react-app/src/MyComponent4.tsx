import { useState } from "react";

function MyComponent4() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Tesla",
    model: "Model S",
  });

  //onChange event handler accepts callback to some functions:
  function handleYearChange(event: any) {
    //...car = spread all of the other properties of our car, and add this year:
    // setCar({year: 2024, make: "Tesla", model: "Model S", year: 2025}) (newest year key replaces old key)
    // setCar({...car, year: event.target.value});
    //c = previous state of car object:
    setCar((c) => ({ ...c, year: event.target.value }));
  }
  function handleMakeChange(event: any) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }
  function handleModelChange(event: any) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }
  return (
    <div>
      <p>
        Your facorite car is: {car.year} {car.make} {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYearChange} />
      <br />
      <input type="text" value={car.make} onChange={handleMakeChange} />
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />
      <br />
    </div>
  );
}

export default MyComponent4;
