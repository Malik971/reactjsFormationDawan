import axios from "axios";

export const useProducts = () => {
  const url = "http://localhost:3001/products";
 
  const getPaginate = (page, perPage) => {
    return axios.get(`${url}/?_page=${page}&_per_page=${perPage}`);
  };
 
  return { getPaginate };
};
 