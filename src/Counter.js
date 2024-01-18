import React, { useContext, useState } from "react";
import { MyContext } from "./MyProvider";

function Counter() {
  const { count, increement } = useContext(MyContext);

  return (
    <div className="App">
      <h1>This is Counter component</h1>
      <h2>Count: {count} </h2>
      <button onClick={increement}>ADD</button>
    </div>
  );
}
export default Counter;
