import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/firebase";
import ProductCard from "./ProductCard";
import Banner from "./Banner";

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(["products"], getProducts);
  return (
    <>
      <Banner />
      {isLoading && <p>🛫...Loading...🛬</p>}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-1 gap-4 p-4 md:grid-cols-5 lg-grid-cols-6 bg-home__background">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ul>
    </>
  );
}
