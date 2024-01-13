import React from "react";
import CounterDisplay from "./CounterDisplay";

function ParentCounter({ countData }) {
  return (
    <div className="App">
      <hr /> <br /> <br />
      <h1>I am the parent component</h1>
      <CounterDisplay data={countData} />
    </div>
  );
}

export default ParentCounter;
