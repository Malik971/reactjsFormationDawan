import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProduts";
import ProductCard from "../components/ProductCard";

export const Products = () => {
  const { getPaginate } = useProducts();

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const [responseApi, setResponseApi] = useState({
    page: 1,
  });

  useEffect(() => {
    loadProducts();
  }, [page]);

  const loadProducts = () => {
    getPaginate(page, 5).then((resp) => {
      setProducts(resp.data.data);
      setResponseApi(resp.data);
    });
  };

  return (
    <>
      <h1>Mes produits</h1>
      <div className="w-full grid grid-cols-4 gap-2">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>

      <div className="w-1/4 m-auto">
        <button className="btn" onClick={() => setPage((prev) => prev - 1)}>
          précédent
        </button>
        <span>
          N°: {responseApi.next ? responseApi.next - 1 : responseApi.prev + 1}
        </span>
        <button className="btn" onClick={() => setPage((prev) => prev + 1)}>
          suivant
        </button>
      </div>
    </>
  );
};