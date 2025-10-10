import React, { useState } from "react";

const Flux = () => {

  const [childData, setChildData] = useState("")

  const callBack = (dataText) => {
    console.log("Chez le parent",dataText);
    setChildData(dataText)
    
  }
  return (
    <div>
      <h1>Les flux de données</h1>

      <h2>De parent vers enfant: </h2>
      <p>
        Pour faire passer des données d'un composant parent vers le composant
        enfant, nous devons utiliser les 'props'. Exemple:
      </p>

      <h2>De enfant vers parent: </h2>
      <p>
        Il est courant d'utiliser des fonctions de rappel (callback functions)
        passées en tant que props du parent vers l'enfant. Ces fonctions sont
        ensuite appelées dans le composant enfant pour transmettre des données
        au parent
      </p>

      <h2>Exemple</h2>
    <p>Pour passage de parent vers enfant</p>
    <p>Donnée recue du parent: {childData}</p>
    <ChildrenComponent text="Voici, mon enfant" callBack={callBack}/>

    </div>
  );
};

export default Flux;

const ChildrenComponent =({text, callBack}) => {
  const data = "Text créer chez le composant enfant !"

  // Pour faire passer une donnée vers le parent, j'ai besoin d'un évènement


  return (<div>
    <p>texte passé par le parent: {text} </p>
    <p className="font-bold">
        Pour faire passer une donnée vers le parent, j'ai besoin d'un évènement
      </p>
    <button onClick={()=> callBack(data)}>Envoie des données vers le parent</button>
  </div>)
}