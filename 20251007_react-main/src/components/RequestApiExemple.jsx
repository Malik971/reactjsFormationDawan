import axios from "axios";
import React from "react";

const RequestApiExemple = () => {
  axios
    .get("http://localhost:3001/products")
    .then((response) => console.log(response)); // Quand on ne souhaite pas gérer les erreurs
  axios
    .get("http://localhost:3001/products")
    .then((response) => console.log(response)) // fonction se déclenche uni
    .catch((err) => console.error(err))
    .finally(() => console.log("réponse reçue"));
  return <div></div>;
};

export default RequestApiExemple;
