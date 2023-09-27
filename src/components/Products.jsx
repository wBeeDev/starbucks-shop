import React from "react";
import ProductCard from "./ProductCard";
import Banner from "./Banner";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

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
