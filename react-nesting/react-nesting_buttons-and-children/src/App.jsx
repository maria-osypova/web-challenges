import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Sent</Button>
      <Button>Recieve</Button>
      <Button>Exchange</Button>
      <Button>Sell</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
