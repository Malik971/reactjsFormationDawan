import { useState } from "react";


export const ExercicesFruits = () => {
  const products = [
    { category: "Fruits", price: "$1", number: 0, name: "Banana" },

    { category: "Fruits", price: "$1", number: 2, name: "Mango" },

    { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },

    { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },

    { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },

    { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
  ];

  const [checked, setChecked] = useState(false)
  const [search, setSearch] = useState("")

  const handleChecked = (e) => {
    setChecked(e.target.value)
  }

  return (
    <>
      <h1>Exercice Fruits</h1>
      <h2>Consigne :</h2>
      <p>
        1. Créer un composant enfant qui affiche les produits, l'appeler deux
        fois : Une fois pour les fruits / une fois pour les légumes
      </p>
      <h1>Liste des Fruits</h1>
      <ListFruits products={products.filter(p => p.category === "Fruits")} />
      <h1>Liste des Vegetables</h1>
      <ListFruits products={products.filter((p) => p.category ===  "Vegetables")} />
      <p>
        2. Créer une checkbox qui permettra d'afficher/masquer les produits qui
        ne sont plus en stock ( quand number est égale à 0)
      </p>
      {/* <NumberList products={products.filter((p) => p.number >0)} />
      <input type="checkbox" onChange={(e)=> setChecked(e.target.checked)} checked={checked}/> 

      { checked ? <p>Case coché !</p> : <p>Case non cochés</p>} */}
      <input type="checkbox" onChange={(e)=> setChecked(e.target.checked)} checked={checked}/>
      <NumberList products={products.filter((p) => checked ? p.number > 0 : true)} afficherHorsStock={checked}/>

      <p> 3. Faire une barre de recherche qui permettra de filtrer les éléments</p>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <NumberList products={products.filter((p) => checked ? p.number > 0 : true)} afficherHorsStock={checked}/>
    </>
  );
};

const ListFruits = ({ products, afficherHorsStock, searchValue}) => (
  <>
    {products.filter((product)=> 
    (afficherHorsStock ? true : product.number > 0 ) &&
    product.name.includes(searchValue)
    
  )
    
    .map((fruit, index) => (
      <div key={index}>
        <h3>{fruit.name}</h3>
        <p>Prix: {fruit.price}</p>
        <p>Nombre en stock: {fruit.number}</p>
      </div>
    ))}
  </>
)

// const NumberList = ({ products }) => {
//   <>
//     {
//       products.map((stock, index) => (
//         <div key={index}>
//           <h1>Liste des Stock</h1>
//           <h3>{stock.name}</h3>
//         <p>Prix: {stock.price}</p>
//         <p>Nombre en stock: {stock.number}</p>
//         </div>
//       ))
//     }
  
//   </>
// }

const NumberList = ({ products }) => (
  <>
    {products.map((stock, index) => (
      <div key={index}>
        <h3>Liste des Stock</h3>
        <h3>{stock.name}</h3>
        <p>Prix: {stock.price}</p>
        <p>Nombre en stock: {stock.number}</p>
      </div>
    ))}
  </>
)