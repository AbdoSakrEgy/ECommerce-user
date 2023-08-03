import React from "react";
import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import {
  addProductInCart,
  removeOneProductFromCart,
} from "../Redux/productsSlice";

export default function IncDecProduct({ productInCart }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className="border flex justify-center items-center mr-3">
        <button
          className={`${
            productInCart.repeatNumInCart === 1 ? "opacity-40 " : ""
          } px-3`}
          onClick={() => dispatch(removeOneProductFromCart(productInCart))}
        >
          <Icon icon="ph:minus-bold" />
        </button>
        <span className="mx-1">{productInCart.repeatNumInCart}</span>
        <button
          className="px-3"
          onClick={() => dispatch(addProductInCart(productInCart))}
        >
          <Icon icon="ph:plus-bold" />
        </button>
      </div>
    </>
  );
}
