import { useState } from "react";

const HookUseStates = () => {
  const [count, setCount] = useState(0)
  const hookCompt = () => {
    setCount((precedant) => precedant + 1)
  }
  return (
    <div>
      <h1>Dan mon Hook Use State</h1>
      <p>J'ai un compteur : {count}</p>
      <button onClick={hookCompt}>ICI SA MARCHE</button>
      
    </div>
  );
};

export default HookUseStates;