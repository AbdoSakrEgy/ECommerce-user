import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../Redux/apiProductsSlice";
import ShoppingBagBadge from "../Atoms/ShoppingBagBadge";
import { Icon } from "@iconify/react";

export default function ProductDetails() {
  const { productId } = useParams();
  const {
    data: productDetails,
    error: productDetailsError,
    isLoading: productDetailsIsLoading,
  } = useGetProductByIdQuery(productId);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-between px-[10vw] py-5 sticky top-0 z-40 ease-in duration-200 bg-white">
        <div>
          <Link to={"/"}>
            <Icon icon="mdi:clothes-hanger" width="40" />
          </Link>
        </div>
        <div className="relative">
          <Icon icon="ci:shopping-bag-02" width="40" />
          <ShoppingBagBadge />
        </div>
      </div>

      {productDetailsError ? (
        <>Oh no, there was an error</>
      ) : productDetailsIsLoading ? (
        <div className="flex flex-col lg:flex-row justify-center items-center h-[90%]">
          <span className="loading loading-spinner text-warning loading-lg"></span>
        </div>
      ) : productDetails ? (
        <div className="flex flex-col lg:flex-row justify-center items-center h-[90%]">
          <div className="mr-40">
            <img
              className="max-w-[200px] lg:max-w-[400px]"
              src={productDetails.image}
              alt="image not found"
            />
          </div>
          <div>
            <div className="text-[26px] font-medium mb-2 mx-auto max-w-[450px]">
              {productDetails.title}
            </div>
            <div className="text-xl font-medium mb-6 mx-auto max-w-[450px] text-red-500">
              $ {productDetails.price}
            </div>
            <div className="mb-8 mx-auto max-w-[450px]">
              {productDetails.description}
            </div>
            <button className="py-4 px-8 bg-black text-white">
              Add to cart
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
