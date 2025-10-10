import React, { useState } from 'react';

const useToggles = (initialState = false) => {
  const [state, setState] = useState(initialState)
  const toggle = () => setState((prev) => !prev)

  return [state, toggle]
};

export default useToggles;