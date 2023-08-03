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
      <div className="flex justify-between items-center h-full lg:mb-4 mb-2 font-bold">
        <span>TOTAL: $ {totalPrice}</span>
        <button
          onClick={() => dispatch(clearProductsInCart())}
          className="flex justify-center items-center lg:h-12 lg:w-12 h-7 w-7 bg-red-500 text-white"
        >
          <Icon icon="tabler:trash" width={20} />
        </button>
      </div>
      <button className="w-full lg:py-4 py-2 lg:mb-4 mb-2 bg-gray-300">View cart</button>
      <button className="w-full lg:py-4 py-2 bg-black text-white">Checkout</button>
    </>
  );
}
