import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function Timer(){
  const [count, setCount]=useState(0);
  useEffect(()=>{
    setTimeout(() => {
      setCount((count)=>count+1);
    }, 10000);
  });
  return (
    <h1>Rendered {count} times!!</h1>
  )
}


function App() {
  const [color, setColor] = useState("olive");

  // const [color, setColor] = useState(() => {
  //   // Retrieve the saved color from local storage or default to "olive"
  //   return localStorage.getItem("bgColor") || "olive";
  // });

  // useEffect(() => {
  //   // Save the selected color to local storage whenever it changes
  //   localStorage.setItem("bgColor", color);
  // }, [color]);

  return (
    <>
    <Timer/>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={()=>setColor('red')}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
                    onClick={()=>setColor('blue')}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
                    onClick={()=>setColor('green')}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
