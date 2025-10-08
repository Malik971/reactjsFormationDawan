import React, { useEffect, useState } from 'react';

const HookUseEffect = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("useEffect déclenché");

    document.title = `Count ${count}`
    
  }, [count])

  useEffect(() => {
    console.log("USER");
    return () => {
      "La fonction qui se déclenchera lors de la descrution du composant"
    }
  })

  return (
    <div>
      <p>count: {count} </p>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      
    </div>
  );
};

export default HookUseEffect;