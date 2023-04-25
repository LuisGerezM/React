import { useRef, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  const refImg = useRef(null);
  const [count, setCount] = useState(0);
  const [loadImage, setLoadImage] = useState(true);

  return (
    <div className="App">
      {!loadImage ? null : (
        <div
          style={{
            color: "white",
            background: "red",
            height: "400px",
            width: "400px",
          }}
        >
          Cargando ...
        </div>
      )}
      <img src="/vite.svg" className="logo" alt="Vite logo" onLoad={() => setLoadImage(false)} style={!loadImage ? {} : { display: "none" }} />
      <img src={reactLogo} className="logo react" alt="React logo" onLoad={() => setLoadImage(false)} style={!loadImage ? {} : { display: "none" }} />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
