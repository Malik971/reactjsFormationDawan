import React from 'react';

const ComponentChilden = ({text}) => {
  return (
    <div>
      <p>Je suis le composant enfant</p>
      <p>Text enfant: {text}</p>
    </div>
  );
};

export default ComponentChilden;