import axios from "axios";

const useProducts = () => {
  const url = "http://localhost:3000/products"
  const getProducts = () => {
    return axios.get(url);
  };

  const addProduct = (data) => {
    return axios.post(url, data)
  }

  return { getProducts, addProduct };
};

export default useProducts;
