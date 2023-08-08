import React, { useState } from "react";
import { useGetAllProductsQuery } from "../Redux/apiProductsSlice";
import ProductCard from "../Molecules/ProductCard";
import FilterProducts from "../Molecules/FilterProducts";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    data: allProducts,
    error: allProductsError,
    isLoading: allProductsIsLoading,
  } = useGetAllProductsQuery();

  return (
    <>
      <div className="flex justify-center items-center">
        <FilterProducts setSelectedCategory={setSelectedCategory} />
      </div>
      <div className="flex justify-center items-center flex-wrap gap-16 px-[10vw]">
        {allProductsError ? (
          <div className="py-5">Oh no, there was an error</div>
        ) : allProductsIsLoading ? (
          <span className="loading loading-spinner text-warning py-5"></span>
        ) : allProducts ? (
          allProducts
            .filter((product) => {
              if (selectedCategory) {
                return product.category === selectedCategory;
              } else {
                return product;
              }
            })
            .map((card) => <ProductCard key={card.id} cardData={card} />)
        ) : null}
      </div>
    </>
  );
}
