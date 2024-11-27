import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [valueCount, setValueCount] = useState(0);

  function handleAdd() {
    setValueCount(valueCount + 1);
  }

  function handleSubtract() {
    setValueCount(valueCount - 1);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={valueCount} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleAdd}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleSubtract}
        >
          -
        </button>
      </div>
    </div>
  );
}

// const value = value, setter = use state
// add onClick to +- with setting new value
