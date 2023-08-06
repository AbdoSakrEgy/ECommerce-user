import React from "react";
import { useSelector, useDispatch } from "react-redux";
import numberOfProudctsInCart from "./numberOfProductsInCart";

export default function ShoppingBagBadge() {
  const { productsInCart } = useSelector((state) => state.products);

  return (
    <>
      <span className="flex justify-center items-center absolute bottom-2 right-0 rounded-full w-5 h-5 text-sm bg-red-700 text-white">
        {numberOfProudctsInCart(productsInCart)}
      </span>
    </>
  );
}
