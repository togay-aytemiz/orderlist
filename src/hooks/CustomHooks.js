import { useState, useEffect } from "react";
import { useFetch } from "./UseFetch";

const url = "https://fakestoreapi.com/products";

const CustomHooks = () => {
  const { loading, products } = useFetch(url);

  return (
    <>
      <h1>CustomHooks</h1>
      <h2>{loading ? "loading" : "data"}</h2>
      {/* {products.map((product) => {
        return <p>{product.title}</p>;
      })} */}
    </>
  );
};
export default CustomHooks;
