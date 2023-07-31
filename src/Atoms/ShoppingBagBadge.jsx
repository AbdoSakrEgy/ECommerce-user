import React from "react";
import { useSelector, useDispatch } from "react-redux";
import numberOfProudctsInCart from "./numberOfProductsInCart";

export default function ShoppingBagBadge() {
  const { productsInCart } = useSelector((state) => state.products);

  return (
    <>
      <span className="flex justify-center items-center absolute bottom-0 right-0 rounded-full w-[50%] h-[50%] text-sm bg-red-700 text-white">
        {numberOfProudctsInCart(productsInCart)}
      </span>
    </>
  );
}
