import { useState } from "react";

const HookUseStates = () => {
  const [count, setCount] = useState(0)
  const hookCompt = () => {
    setCount((precedant) => precedant + 1)
  }
  // const hookComptNegatif = () => {
  //   setCount((precedant) => precedant - 1)
  // }
  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Dan mon Hook Use State</h1>
      <p>J'ai un compteur : {count}</p>
      <button onClick={hookCompt}>PLUS</button>
      <button onClick={() => setCount((prev) => prev - 1)}>MOINS</button>
      <button onClick={reset}> Batart</button>
      
    </div>
  );
};

export default HookUseStates;