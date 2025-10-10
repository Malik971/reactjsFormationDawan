import React from "react";
import useToggles from "../hooks/useToggles";
import useIncrement from "../hooks/useIncrement";

const CustomHook = () => {
  const [checked, toggle ] = useToggles(true)

  const {count, increment, decrement} = useIncrement({})
  return (
    <div>
      <h1>Hook personalisés</h1>

      <a href="https://usehooks.com/" className="underline">
        Plein de hooks personnalisé ici !!
      </a>

      <h2>Cas de figure n°1</h2>
      <p>
        Dans une appli react, on peut souvent avoir besoin de faire varier une
        valeur entre vrai et faux. Par exemple pour afficher/masquer un élément.
        Pour cela, on peut mettre en place un hook personnalisé
      </p>

      <input type="checkbox" onChange={toggle} checked={checked} />

      {checked && <p>Elément affiché</p>}

      <h2>Cas de figure n°2</h2>
      <p>
        Count: {count}
      </p>
      <button onClick={increment}>Monte</button>
      <button onClick={decrement}>Decent</button>
    </div>
  );
};

export default CustomHook;
