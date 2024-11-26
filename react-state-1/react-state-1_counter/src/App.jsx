import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function addOne() {
    setCount(count + 1);
  }
  function subtrackOne() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button__subtrack" onClick={subtrackOne}>
          -
        </button>
        <button type="button__add" onClick={addOne}>
          +
        </button>
      </div>
    </div>
  );
}
