import React from "react";
import {
  useGetAllProductsQuery,
  useGetProductByNameQuery,
} from "../Redux/apiProductsSlice";
import ProductCard from "../Molecules/ProductCard";

export default function Products() {
  const {
    data: allProducts,
    error: allProductsError,
    isLoading: allProductsIsLoading,
  } = useGetAllProductsQuery();

  const { data, error, isLoading } = useGetProductByNameQuery("men's clothing");

  return (
    <>
      <div className="flex justify-between items-center flex-wrap px-[10vw] pt-14">
        {allProductsError ? (
          <div>Oh no, there was an error</div>
        ) : allProductsIsLoading ? (
          <span className="loading loading-spinner text-warning"></span>
        ) : allProducts ? (
          allProducts.map((card) => (
            <ProductCard key={card.id} cardData={card} />
          ))
        ) : null}
      </div>
    </>
  );
}
