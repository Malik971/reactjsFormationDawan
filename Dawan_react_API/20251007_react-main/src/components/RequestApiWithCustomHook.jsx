import React, { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { TableProducts } from "./TableProducts";
import ProductForm from "./ProductForm";

const RequestApiWithCustomHook = () => {
  const { getProducts } = useProducts();
  const [product, setProducts] = useState([]);
  const [displayForm, setDisplayForm] = useState(false)

  useEffect(() => {
    // getProducts();
    // loadProductAsync();
    getProducts().then((resp) => {
      console.log("En utilisant le hook: ", resp.data);
      setProducts(resp.data);
    });
  }, []);

  const handleDelete = (produitadetuire) => {
    setProducts((prev) => prev.filter((p) => p.id !== produitadetuire.id))
  };

  const handleAdd = (newProduct) => {
    setProducts((prev) => {
      let copy = [...prev]
      copy.push(newProduct)
      return copy
    })
  }

  return (
    <div>
      <h1>Récupération avec mon hook personalisés</h1>
      {/* je constate que lorsque je supprime un élément il faut recharge la page pour que la bd ce mets a jour sans doute a cause du produitadetuire={handleDelete} qui ne veux pas passer ? */}
      <p>Tableau de produits: </p>
      <TableProducts data={product} produitadetuire={handleDelete} />
      <button onClick={() => setDisplayForm(true)} className="btn bg-blue-300">Ajouter</button>

      {displayForm && <ProductForm handleAdd={handleAdd} />}

    </div>
  );
};

export default RequestApiWithCustomHook;
