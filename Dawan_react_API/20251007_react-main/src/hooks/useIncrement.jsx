import React, { useState } from "react";

const useIncrement = ({valeurDeDepart = 0, max = 10, min = -10}) => {
  const [count, setCount] = useState(valeurDeDepart);

  const increment = () => setCount((prev) => prev < max ? prev + 1 : prev);
  const decrement = () => setCount((prev) => prev > min ? prev - 1 : prev);

  return {count, increment, decrement};
};

export default useIncrement;
