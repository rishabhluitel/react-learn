import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  const addValue = () => {
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
    // console.log(counter);
  };
  const subValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={subValue}>Decrease value</button>
    </>
  );
}

export default App;
