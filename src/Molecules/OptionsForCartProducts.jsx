import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { clearProductsInCart, totalPriceCalc } from "../Redux/productsSlice";

export default function OptionsForCartProducts() {
  const { productsInCart,totalPrice } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(totalPriceCalc());
  }, [productsInCart]);

  return (
    <>
      <div className="flex justify-between items-center mb-4 font-bold">
        <span>TOTAL: $ {totalPrice}</span>
        <button
          onClick={() => dispatch(clearProductsInCart())}
          className="flex justify-center items-center h-12 w-12 bg-red-500 text-white"
        >
          <Icon icon="tabler:trash" width={30} />
        </button>
      </div>
      <button className="w-full py-4 mb-4 bg-gray-300">View cart</button>
      <button className="w-full py-4 bg-black text-white">Checkout</button>
    </>
  );
}
